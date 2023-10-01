import {$host} from '../http';

export default class ProductService{
    
    static fetchGuitar(typeId, brandsId){
        return $host.get('/product/guitar', {params: {typeId, brandsId}});
    }

    static getOneGuitar(id, userId){
      return $host.get(`/product/guitar/${id}`, {params: {userId}});
    }

    static addGuitar(name, price, img, typeId, brandId){
        return $host.post('/product/add', {name, price, img, typeId, brandId});
    }

    static deleteGuitar(id){
        return $host.delete(`/product/delete/${id}`, {id});
    }

}