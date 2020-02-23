const Sequelize = require('sequelize');
const Subjects = require('./subjects');
const Questions = require('./questions');
const db = require('../../base/postgresql/postgresql');

const Quizzes = db.sequelize.define('quizzes', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Quizzes.hasMany(Questions);

module.exports = Quizzes;