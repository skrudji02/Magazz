const jwt = require('jsonwebtoken');
const {secret} = require("../config");
const db = require('../db');

class Basket{
    async getProductsUser(req,res) {
        try{
            const token = req.headers.cookie.split('=')[1];
            const decodedData = jwt.verify(token, secret);
            const userID = decodedData.id;
            const productID = await db.query('SELECT id_product FROM cart WHERE id_customer = $1', [userID]);
            let basket = [];
            let product = '';
            //fix
            for(let elem of productID.rows){
                product = await db.query('SELECT * FROM guitar where id = $1', [elem.id_product]);
                basket.push(product.rows[0]);
            }
            res.render('shoppingСart', {basket: basket});
        }
        catch(err)
        {
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async addInBasket(req, res){
        try{
            const token = req.headers.cookie.split('=')[1];
            const decodedData = jwt.verify(token, secret);
            const id_customer = decodedData.id;
            const id_guitar = req.params.id;
            const add_crat = await db.query('INSERT INTO cart (id_customer, id_product, quantity) VALUES ($1, $2, $3)', [id_customer, id_guitar, 1]);
            res.send("Товар добавлен в карзину");
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка добавления товара !!!');
        }
    }

    async deleteFromBasket(req, res){
        try{
            const productID = req.params.id;//req.body.text//req.body.productID;//document.getElementById("del").innerHTML;//document.querySelector('#name').textContent;
            const delete_product = await db.query('DELETE FROM cart WHERE id_product = $1', [productID]);
    
            return res.send();
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка удаления товара !!!');
        }
    }
        
}

module.exports = new Basket();