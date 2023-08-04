const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Basket = sequelize.define('baskets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

module.exports = {
    Basket,
    BasketProduct
}