const Sequelize = require('sequelize');
const { postgresql } = require('../../../../config/config');
const convert = require('../convert');
require("../../base/logHistory");

let host = postgresql.host;
let port = postgresql.port;
let user = postgresql.user;
let password = postgresql.password;
let database = postgresql.database;
let connectionLimit = postgresql.connectionLimit;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: postgresql.port,
    logging: console.log,
    dialect: 'postgres',
    timezone: '+07:00',
    pool: {
        max: connectionLimit,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true,
        timestamps: false,
        underscored: false
    },
    dialectOptions: {
        typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME' || field.type === 'DATE') {
                return convert.convertOutputDate(field.string())
            }
            return next()
        }
    },
    // sync: { force: true }
});

let connection = setInterval(() => {
    sequelize.authenticate()
        .then(function (conn) {
            clearInterval(connection);
            log.info(`Database connected: ` + host + ":" + port);
        })
        .catch(e => log.error(`ERROR: NOT CONNECTED TO DATABASE | ${e}`));
    sequelize.sync()
        .then((res) => {
            log.info(`Đã đồng bộ model.`);
        })
        .catch(err => {
            log.error('ERROR: Chưa đồng bộ model: ');
            log.error(err);
        });
}, 1000);


module.exports = {
    sequelize
};