import {$host} from '../http';

export default class ProductService{
    
    static fetchGuitar(typeId, brandsId){
        return $host.get('/product/guitar', {params: {typeId, brandsId}});
    }

    static getOneGuitar(id){
      return $host.get(`/product/guitar/${id}`, {id});
    }

    static addGuitar(name, price, img, typeId, brandId){
        return $host.post('/product/add', {name, price, img, typeId, brandId});
    }

    static deleteGuitar(id){
        return $host.delete(`/product/delete/${id}`, {id});
    }

}