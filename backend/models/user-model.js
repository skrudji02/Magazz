const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const {Basket, BasketProduct} = require('./basket-model');
const {Rating, Type, Product, Brand, TypeBrand } = require('./product-model');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Type.hasMany(Product);
Product.belongsTo(Type);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Type.belongsToMany(Brand, {through: TypeBrand });
Brand.belongsToMany(Type, {through: TypeBrand });



module.exports = {
    User
}