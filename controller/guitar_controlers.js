const db = require('../db')

class GuitarController{
    async getGuitars(req, res){
        const guitars = await db.query('SELECT * FROM guitar')
        res.render('product', {guitars: guitars.rows})
    }

    async getOneGuitar(req, res){
        const id = req.params.id
        const guitar = await db.query('SELECT * FROM guitar where id = $1', [id])
        res.render('guitar', {guitar: guitar.rows[0]})
    }

    async writeFile(req, res){
        const fs = require('fs').promises;
        console.log(1);
        await fs.writeFile('fil.txt', "test");
        res.render('guitar');
    }
}


module.exports = new GuitarController()