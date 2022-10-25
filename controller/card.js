//const fs = require('fs')
import fs from 'fs'
class Basket{
    async getProductsUser(req,res) {
       res.render('shoppingСart')
    }

    async writeFile() {
        fs.writeFileSync("hello.txt", "Привет ми ми ми!")
    }
        
}

module.exports = new Basket()