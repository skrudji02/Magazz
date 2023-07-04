import $auth from '../http';

export default class BrandService{
    
    static getBrand(){
        return $auth.get("/product/brand");
    }

    static addBrand(name_brand){
        return $auth.post("/product/addBrand", {name_brand});
    }

    static deleteBrand(id){
        return $auth.delete(`/product/brand/${id}`, {id});
    }

}