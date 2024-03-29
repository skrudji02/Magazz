import {makeAutoObservable} from 'mobx'; 
import AuthService from '../services/AuthService';
import axios from 'axios';
import { AUTH_URL } from '../http';
import jwt_decode from 'jwt-decode';

export default class AuthStore{

    id = '';
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

    getUser() {
      return this.user;
    }

    getUserId() {
      return this.id;
    }

    getAuth() {
      return this.isAuth;
    }

    setRole(role){
        this.role = role;
    }

    setUserId(userId) {
      this.id = userId;
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response.data.user);
            this.setAuth(true);
            this.setUser(response.data.user);
            //const userData = jwt_decode(response.data.accessToken);
            //this.setAuth(true);
            //this.setUser(email);
             //this.setRole(userData.role);
           // this.setUserId(userData.id);
           return response.data.user;
        }catch(err){
            console.log(err.response.data.message);
        }
    }

    
    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response.data.user);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response.data.user;
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
            this.setUserId('');
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    async checkAuth(){
        try{
            const response = await axios.get(AUTH_URL + '/user/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            console.log(response.data.user);
            this.setUser(response.data.user);
            this.setUserId(response.data.user.id)
            //const userData = jwt_decode(response.data.accessToken);
            //this.setAuth(true);
            //this.setUser(userData.email);
            //this.setRole(userData.role);
            //this.setUserId(userData.id);
            return response.data.user.id;
        }catch(err){
            console.log(err.response.data.message);
        }
    }
}