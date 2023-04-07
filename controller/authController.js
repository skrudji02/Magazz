const db = require('../db');
const jwt = require('jsonwebtoken');
const {secret} = require("../config");
const Handlebars = require('handlebars');
const ApiError = require('../error/ApiError');

const generateAccessToken = (id, username, roles)=>{
    const payload = {
        id,
        username,
        roles
    };
    return jwt.sign(payload, secret, {expiresIn: "24h"});
};

class authController{
    async postRegistration(req, res, next){
        const name_max = 9;
        const name_min = 4;
        const password_min = 7;

        try{
            const user_name = await db.query('SELECT * FROM users WHERE username = $1', [req.body.userName]); 
            if(user_name.rows[0] != undefined)    
                return next(ApiError.badRequest("Пользователь с таким именем уже существует"));                                                         

            if(req.body.userName.length < name_min || req.body.userName.length > name_max)
                return next(ApiError.badRequest("Имя пользователя должно быть от 4 до 9 символов !!!"));

            const users_email = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email]); 
            if(users_email.rows[0] != undefined)                                                          
                return next(ApiError.badRequest("Пользователь с таким email уже существует"));

            if(req.body.password.length < password_min)
                return next(ApiError.badRequest("Минимальная длина пароля 7 символов !!!"));
          
            const create_user =  await db.query('INSERT INTO users(username, email, password) VALUES ($1, $2, $3)', [req.body.userName, req.body.email, req.body.password]);  
            return res.render('home');     
        }
        catch(err){
            return res.status(400).render('Ошибка !!!');
        }
    }

    async postLogin(req, res, next){
        try{
            const users = await db.query('SELECT * FROM users WHERE username = $1', [req.body.userName]);
            if(users.rows[0] != undefined && users.rows[0].password === req.body.password){

                const token = generateAccessToken(users.rows[0].id, users.rows[0].username, users.rows[0].role_user);
                res.cookie('Bearer', token);

                Handlebars.registerHelper("authorization", () => {
                    return new Handlebars.SafeString('<a class="nav-link active" href="#">'+users.rows[0].username+'</a>|'+'<a class="nav-link active" href="#" onclick="openLogin()">Выход</a>');
                });

                if(users.rows[0].role_user === 'ADMIN'){
                    Handlebars.registerHelper("admin", () => {
                        return new Handlebars.SafeString('<a class="nav-link" href="#" onclick="openData()">Кабинет</a>');
                    });
                }

                return res.render('home', {token: token}); 
            }
            else
                return next(ApiError.badRequest('Не верный пароль или имя пользователя !!!'));
        }
        catch(err){
            console.log(err);
            return res.status(400).render('Ошибка !!!');
        }
    }

    async getLogin(req, res){
        return res.render('login');
    }

    async getRegistration(req, res){
        return res.render('registration');
    }

    async exit(req, res){
        res.clearCookie("Bearer");

        Handlebars.registerHelper("authorization", () => {
            return new Handlebars.SafeString('<a class="nav-link active" href="#" onclick="openRegistrate()">Регистрация</a>|<a class="nav-link active" href="#" onclick="openLogin()">Войти</a>');
        });

       Handlebars.registerHelper("admin", () => {
            return new Handlebars.SafeString('');
        });
       
        return res.render('home');
    }
}

module.exports = new authController();