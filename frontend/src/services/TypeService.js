import $auth from '../http';

export default class TypeService{
    
    static getTypes(){
        return $auth.get("/product/type");
    }

    static addType(name_type){
        return $auth.post("/product/addType", {name_type});
    }

    static deleteType(id){
        return $auth.delete(`/product/type/${id}`, {id});
    }

}