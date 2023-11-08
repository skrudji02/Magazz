const { Brand } = require('../models/brand-model');

class BrandService{

    async getBrands(){
        const brands = await Brand.findAll();
        return brands;
    }

    async addBrand(name_brand){
        const brand = await Brand.build({ name: name_brand });
        await brand.save();
        return brand;
    }

    async deleteBrand(id){
        const brand = await Brand.findOne({where: {id}});
        const delete_brand = await brand.destroy();
        return `Гитара с id:${id} удалена`;
    }
}

module.exports = new BrandService;