const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const { Product } = require('./product-model');

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING(40), unique: true, allowNull: false},
})

Brand.hasMany(Product);
Product.belongsTo(Brand);

module.exports = {
  Brand,
}