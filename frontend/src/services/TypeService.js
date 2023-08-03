import {$host} from '../http';

export default class TypeService{
    
    static getTypes(){
        return $host.get("/product/type");
    }

    static addType(name_type){
        return $host.post("/product/addType", {name_type});
    }

    static deleteType(id){
        return $host.delete(`/product/type/${id}`, {id});
    }

}