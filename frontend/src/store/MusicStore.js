import ProductService from '../services/ProductService';
import AuthStore from '../store/AuthStore';
import {makeAutoObservable} from "mobx";
import jwt_decode from 'jwt-decode';

export default class MusicStore{


    
    async getProducts(typeId){
        try{
            const response = await ProductService.fetchGuitar(typeId);
            console.log(response);
            return response.data;
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async getProduct(id, userId){
      try{
        //const userId = await this.userId();
        //onsole.log(response);
        console.log(userId);
        const response = await ProductService.getOneGuitar(id, userId);
        //console.log(response.data.user.id)
        return response.data;
      }catch(err){
        console.log(err.response.data.message);
      }
    }

    async addProduct(name, price, img, typeId, brandId){
        try{
            const response = await ProductService.addGuitar(name, price, img, typeId, brandId);
            return response.data;
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async updateProduct(){

    }

    async deleteProduct(id){
        try{
            const response = await ProductService.deleteGuitar(id);
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}