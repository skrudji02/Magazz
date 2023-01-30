const db = require('../db');

class guitarController{
    async getGuitars(req, res){
        const guitars = await db.query('SELECT * FROM guitar');
        res.render('product', {guitars: guitars.rows});
    }

    async getOneGuitar(req, res){
        const id = req.params.id;
        const guitar = await db.query('SELECT * FROM guitar where id = $1', [id]);
        res.render('guitar', {guitar: guitar.rows[0]});
    }
}


module.exports = new guitarController();