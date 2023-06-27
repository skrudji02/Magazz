const guitarService = require('../service/guitar-service');

class guitarController{

    async getGuitars(req, res){
        try{
            const guitars = await guitarService.getAllGuitar();
            return res.json(guitars);
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товаров !!!');
        }
    }

    async getOneGuitar(req, res){
        try{
            const id = req.params.id;
            const guitar = await await guitarService.getOneGuitar(id);
            return res.json(guitar);
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }
}


module.exports = new guitarController();