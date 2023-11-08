const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Basket = sequelize.define('baskets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketProduct = sequelize.define('basket_products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, defaultValue: 1}
}) 

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

module.exports = {
    Basket,
    BasketProduct
}