const bcrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize');
const db = require('../../base/postgresql/postgresql');

const Users = db.sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

Users.beforeSave((user, options) => {
  if (user.changed('password')) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  }
});

Users.prototype.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

Users.sync()
  .then(() => {
    Users.count({ where: { username: 'admin@tinasoft.com.vn' }})
      .then(user => { 
        if (user) return;
        else Users.create({username: 'admin@tinasoft.com.vn', password: 'admin'})
      })
  })

module.exports = Users;