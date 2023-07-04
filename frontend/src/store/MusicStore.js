import ProductService from '../services/ProductService';
import {makeAutoObservable} from "mobx";

export default class MusicStore{
    
    productData = [];

    constructor(){
        makeAutoObservable(this);
    }

    setProduct(product) {
        this.productData = product;
    }

    get product(){
        return this.productData;
    }

    async getProduct(typeId){
        try{
            const response = await ProductService.fetchGuitar(typeId);
            this.setProduct(response.data);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async addProduct(name, price, img, typeId, brandId){
        try{
            console.log(img);
            const response = await ProductService.addGuitar(name, price, img, typeId, brandId);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async updateProduct(){

    }

    async deleteProduct(id){
        try{
            const response = await ProductService.deleteGuitar(id);
            console.log(response);
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}