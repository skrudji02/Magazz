import $auth from '../http';

export default class ProductService{
    
    static addGuitar(name, price, img, typeId, brandId){
        return $auth.post('/product/guitarAdd', {name, price, img, typeId, brandId});
    }
}