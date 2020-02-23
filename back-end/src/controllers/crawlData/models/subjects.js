const Sequelize = require('sequelize');
const Quizzes = require('./quizzes');
const db = require('../../base/postgresql/postgresql');

const Subjects = db.sequelize.define('subjects', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Subjects.hasMany(Quizzes);

module.exports = Subjects;