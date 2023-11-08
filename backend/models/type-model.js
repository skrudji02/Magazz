const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const { Product } = require('./product-model');

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING(40), unique: true, allowNull: false},
  img: {type: DataTypes.STRING},
})

Type.hasMany(Product);
Product.belongsTo(Type);

module.exports = {
  Type,
}