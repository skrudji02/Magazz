import {$host} from '../http';

export default class TypeService{
    
    static getTypes(){
        return $host.get("/catalog/types");
    }

    static addType(name_type){
        return $host.post("/catalog/addType", {name_type});
    }

    static deleteType(id){
        return $host.delete(`/catalog/type/${id}`, {id});
    }

}