const Sequelize = require('sequelize');
const db = require('../../base/postgresql/postgresql');

const Gallery = db.sequelize.define('gallery', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  tag: {
    type: Sequelize.TEXT,
  },
  url: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})

module.exports = Gallery;