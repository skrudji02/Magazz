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
            const id = req.body.id;
            const guitar = await guitarService.getOneGuitar(id);
            return res.json(guitar);
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async addGuitar(req, res){
        try{
            const {name, price, img, typeId, brandId} = req.body;
            const guitar = await guitarService.addGuitar(name, price, img, typeId, brandId);
            return res.json(guitar);
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async deleteGuitar(req, res){
        try{
            const id = req.body.id;
            const delete_guitar = await guitarService.deleteGuitar(id);
            return res.json(delete_guitar);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async updateGuitar(req, res){
        try{
            const {id, name, price, img, typeId, brandId} = req.body;
            const update_guitar = await guitarService.updateGuitar(id, name, price, img, typeId, brandId);
            return res.json(update_guitar);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async getTypes(req, res){
        try{
            const types = await guitarService.getTypes();
            return res.json(types);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async addType(req, res){
        try{
            const name_type = req.body.name_type;
            console.log( name_type)
            const create_type = await guitarService.addType(name_type);
            return res.json(create_type);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async getBrand(req, res){
        try{
            const brand = await guitarService.getBrands();
            return res.json(brand);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async addBrand(req, res){
        try{
            const name_brand = req.body.name_brand;
            const create_brand = await guitarService.addBrand(name_brand);
            return res.json(create_brand);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }


}


module.exports = new guitarController();