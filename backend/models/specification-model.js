const { Product } = require('./product-model');
const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const SpecificationsProducts = sequelize.define('specifications_products', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  denomination: {type: DataTypes.JSONB, allowNull: false},
});

Product.hasOne(SpecificationsProducts);
SpecificationsProducts.belongsTo(Product);

module.exports = {
  SpecificationsProducts,
}