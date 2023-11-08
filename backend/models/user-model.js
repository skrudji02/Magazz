const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const { Basket } = require('./basket-model');
const { Rating } = require('./rating-model');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING(30), unique: true},
    password: {type: DataTypes.STRING(100)},
    role: {type: DataTypes.STRING(20), defaultValue: "USER"},
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

module.exports = {
    User
}