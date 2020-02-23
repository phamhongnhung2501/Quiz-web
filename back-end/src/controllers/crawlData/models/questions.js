const Sequelize = require('sequelize');
const Quizzes = require('./quizzes');
const db = require('../../base/postgresql/postgresql');

const Questions = db.sequelize.define('questions', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  correctAnswer: {
    type: Sequelize.INTEGER,
  },
  answer0: Sequelize.TEXT,
  answer1: Sequelize.TEXT,
  answer2: Sequelize.TEXT,
  answer3: Sequelize.TEXT,
  answersType: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Questions;