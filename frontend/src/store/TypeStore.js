import {makeAutoObservable} from "mobx";
import TypeService from '../services/TypeService';

export default class TypeStore{

    typesData = [];

    constructor(){
        makeAutoObservable(this);
    }

    setTypes(types) {
        this.typesData = types;
    }

    get types(){
        return this.typesData;
    }

    async getTypes(){
        try{
            const response = await TypeService.getTypes();
            this.setTypes(response.data);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async addType(name){
        try{
            const response = await TypeService.addType(name);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async deleteType(id){
        try{
            const response = await TypeService.deleteType(id);
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}