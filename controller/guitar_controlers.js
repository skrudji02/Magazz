const db = require('../db')

class GuitarController{
    async getGuitars(req, res){
        const guitar = await db.query('SELECT * FROM guitar')
        res.render('product', {guitars: guitar.rows})
    }


}


module.exports = new GuitarController()