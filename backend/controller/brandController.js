const brandService = require('../service/brand-service');

class brandController{

    async getBrand(req, res){
        try{
            const brand = await brandService.getBrands();
            return res.json(brand);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async addBrand(req, res){
        try{
            const {name_brand} = req.body;
            const create_brand = await brandService.addBrand(name_brand);
            return res.json(create_brand);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }

    async deleteBrand(req, res){
        try{
            const {id} = req.params;
            const delete_brand = await brandService.deleteBrand(id);
            return res.json(delete_brand);
        }catch(err){
            console.log(err);
            return res.status(400).render('Ошибка получения товара !!!');
        }
    }
}

module.exports = new brandController;