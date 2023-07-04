import $auth from '../http';

export default class ProductService{
    
    static fetchGuitar(typeId){
        return $auth.get('/product/guitar', {params: {typeId}});
    }

    static addGuitar(name, price, img, typeId, brandId){
        return $auth.post('/product/add', {name, price, img, typeId, brandId});
    }

    static deleteGuitar(id){
        return $auth.delete(`/product/delete/${id}`, {id});
    }

}