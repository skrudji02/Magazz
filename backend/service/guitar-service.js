const {Product} = require('../models/product-model');

class GuitarService{

    async getAllGuitar(){
        const guitars = await Product.findAll();
        return guitars;
    }

    async getOneGuitar(id){
        const guitar = await Product.findOne({where: {id}});
        return guitar;
    }
}

module.exports = new GuitarService;