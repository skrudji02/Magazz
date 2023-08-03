import {makeAutoObservable} from 'mobx'; 
import AuthService from '../services/AuthService';
import axios from 'axios';
import { AUTH_URL } from '../http';
import jwt_decode from 'jwt-decode';

export default class AuthStore{

    user = {};
    role = 'USER';
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

    setRole(role){
        this.role = role;
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            const userData = jwt_decode(response.data.accessToken);
            this.setAuth(true);
            this.setUser(email);
            this.setRole(userData.role);
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            const userData = jwt_decode(response.data.accessToken);
            this.setAuth(true);
            this.setUser(userData.email);
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
            this.setRole('USER');
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    async checkAuth(){
        try{
            const response = await axios.get(AUTH_URL + '/user/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            const userData = jwt_decode(response.data.accessToken);
            this.setAuth(true);
            this.setUser(userData.email);
            this.setRole(userData.role);
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}