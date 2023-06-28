import {makeAutoObservable} from 'mobx'; 
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import ProductService from '../services/ProductService';
import axios from 'axios';
import { AUTH_URL } from '../http';

export default class Store{

    user = {};
    isAuth = false;

    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(email);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    async checkAuth(){
        try{
            const response = await axios.get(AUTH_URL + '/user/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            console.log(response.data);
            this.setUser(response.data.user);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async getUsers(){
        try{
            const response = await UserService.fetchUser();
            console.log(response);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    async addGuitar(name, price, img, typeId, brandId){
        try{
            const response = await ProductService.addGuitar(name, price, img, typeId, brandId);
            console.log(response);
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}