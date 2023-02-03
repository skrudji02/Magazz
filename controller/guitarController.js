const db = require('../db');

class guitarController{
    async getGuitars(req, res){
        try{
            const guitars = await db.query('SELECT * FROM guitar');
            res.render('product', {guitars: guitars.rows});
        }
        catch{
            return res.status(400).render('Ошибка получения товаров !!!');
        }
    }

    async getOneGuitar(req, res){
        try{
            const id = req.params.id;
            const guitar = await db.query('SELECT * FROM guitar where id = $1', [id]);
            res.render('guitar', {guitar: guitar.rows[0]});
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }
}


module.exports = new guitarController();