const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password: '7540355',
    host: 'localhost',
    port: 5432,
    database: "assortment"
})

module.exports = pool