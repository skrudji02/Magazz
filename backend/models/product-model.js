const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { BasketProduct } = require('./basket-model');
const { Rating } = require('./rating-model');

const Product = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.DECIMAL(7,2), allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.DECIMAL(2,1), allowNull: false},
})

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

module.exports = {
    Product,
}