const db = require('../db');
const jwt = require('jsonwebtoken');
const {secret} = require("./config");
//const config = require('./config');
const axios = require('axios');

const generateAccessToken = (id, roles)=>{
    const payload = {
        id,
        roles
    };
    return jwt.sign(payload, secret, {expiresIn: "24h"});
};


class authController{
    constructor(){
        
    }
    async postRegistration(req, res){
        const name_max = 9;
        const name_min = 4;
        const password_min = 7;

        try{
            const user_name = await db.query('SELECT * FROM users WHERE username = $1', [req.body.userName]); 
            if(user_name.rows[0] != undefined)                                                            //users.rows[0].username
                return res.render("Пользователь с таким именем уже существует");

            if(req.body.userName.length < name_min || req.body.userName.length > name_max)
                return res.render("Имя пользователя должно быть от 4 до 9 символов !!!");

            const users_email = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email]); 
            if(users_email.rows[0] != undefined)                                                          
                return res.render("Пользователь с таким email уже существует");

            if(req.body.password.length < password_min)
                return res.render("Минимальная длина пароля 7 символов !!!");
          
            const create_user =  await db.query('INSERT INTO users(username, email, password) VALUES ($1, $2, $3)', [req.body.userName, req.body.email, req.body.password]);  
            return res.render('home');     
        }
        catch(err){
            return res.status(400).render('Ошибка !!!');
        }
    }

    async postLogin(req, res){
        try{
            const users = await db.query('SELECT * FROM users WHERE username = $1', [req.body.userName]);
            if(users.rows[0] != undefined && users.rows[0].password === req.body.password){
                const token = generateAccessToken(users.rows[0].id, users.rows[0].role_user);

                console.log('My Token:', token);
                res.cookie('Bearer', token);
                //res.set('testtoken', {expires: Date.now()});
                //res.set('authorization', `Bearer ${token}`);
                //res.clearCookie("tok");
                console.log(req.headers);
                console.log(req.headers.cookie.split(' ')[1]);
                return res.render('home', {token: token}); 
            }
            else
                return res.status(400).render('Не верный пароль или имя пользователя !!!');
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка2 !!!');
        }
    }

    async getUsers(req, res){
        try{
            const users = await db.query("SELECT * FROM users");
            const table_db = await db.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name");
            console.log(table_db.rows['table_name']);
            console.log(users.rows);
            return res.render('users', {users: users.rows});
        }
        catch(err){
            return res.render('Ошибка получения пользователя !!!');
        }
    }

    async getLogin(req, res){
        console.log(req.headers.cookie)
        return res.render('login');
    }

    async getRegistration(req, res){
        return res.render('registration');
    }
}

module.exports = new authController();