const {Product, Type} = require('../models/product-model');

class GuitarService{

    async getAllGuitar(){
        const guitars = await Product.findAll();
        return guitars;
    }

    async getTypeGuitar(typeId){
        const guitars = await Product.findAndCountAll({where:{typeId}});
        return guitars.rows;
    }

    async getOneGuitar(id){
        const guitar = await Product.findOne({where: {id}});
        return guitar;
    }

    async addGuitar(name_guitar, price_guitar, img_guitar, typeId, brandId) {   
        const create_guitar = await Product.build({ name: name_guitar, price: price_guitar, img: img_guitar, typeId: typeId, brandId: brandId});
        await create_guitar.save();
        return create_guitar;
    }

    async deleteGuitar(id){
        const guitar = await Product.findOne({where: {id}});
        console.log(`GUITAR ${guitar}`);
        const delete_guitar = await guitar.destroy();
        return `Гитара с id:${id} удалена`;
    }

    async updateGuitar(id, name_guitar, price_guitar, img_guitar, typeId, brandId){

    }

    async getTypes(){
        const types = await Type.findAll();
        return types;
    }

    async addType(name_type){
        const create_type = await Type.build({ name: name_type });
        await create_type.save();
        return create_type;
    }

    async deleteType(id){
        const type = await Type.findOne({where: {id}});
        const delete_type = await type.destroy();
        return `Гитара с id:${id} удалена`;
    }

}

module.exports = new GuitarService;