import {makeAutoObservable} from "mobx";
import BrandService from '../services/BrandService';

export default class BrandStore{

    brandData = [];

    constructor(){
        makeAutoObservable(this);
    }

    setBrand(brand) {
        this.brandData = brand;
    }

    get brands(){
        return this.brandData;
    }

    async getBrand(){
        try{
            const response = await BrandService.getBrand();
            this.setBrand(response.data);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async addBrand(name){
        try{
            const response = await BrandService.addBrand(name);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async deleteBrand(id){
        try{
            const response = await BrandService.deleteBrand(id);
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}