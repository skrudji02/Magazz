const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    "magazz",                       // database
    'postgres',                     //user
    '7540355',                      // password
  {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
  }
)
