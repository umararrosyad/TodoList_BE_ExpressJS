'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    user_id: DataTypes.INTEGER,
    task_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    time: DataTypes.DATE,
    priority: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};