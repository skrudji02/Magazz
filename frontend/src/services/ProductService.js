import {$host} from '../http';

export default class ProductService{
    
    static fetchGuitar(typeId, brandsId){
      console.log(typeId);
        return $host.get(`/catalog/types/${typeId}`, {params: {typeId, brandsId}});
    }

    static getOneGuitar(id, userId){
      return $host.get(`/catalog/types/:id/product/${id}/`, {params: {userId}});
    }

    static addGuitar(name, price, img, typeId, brandId){
        return $host.post('/product/add', {name, price, img, typeId, brandId});
    }

    static deleteGuitar(id){
        return $host.delete(`/product/delete/${id}`, {id});
    }

}