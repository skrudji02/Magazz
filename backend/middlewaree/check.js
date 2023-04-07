const jwt = require('jsonwebtoken');
const {secret} = require("../config");
const Handlebars = require('handlebars');

module.exports = (req, res, next) =>{
    try{ 
        const token = req.headers.cookie.split('=')[1];
        const decodedData = jwt.verify(token, secret);
        Handlebars.registerHelper("authorization", () => {
            return new Handlebars.SafeString('<a class="nav-link active" href="#">'+decodedData.username+'</a>|'+'<a class="nav-link active" href="#" onclick="exit()">Выход</a>');
        });
        if(decodedData.roles === 'ADMIN'){
            Handlebars.registerHelper("admin", () => {
                return new Handlebars.SafeString('<a class="nav-link" href="#" onclick="openData()">Кабинет</a>');
            });
        }
    }catch{
        Handlebars.registerHelper("authorization", () => {
             return new Handlebars.SafeString('<a class="nav-link active" href="#" onclick="openRegistrate()">Регистрация</a>|<a class="nav-link active" href="#" onclick="openLogin()">Войти</a>');
        });
        Handlebars.registerHelper("admin", () => {
            return new Handlebars.SafeString('');
        });
    }

    next();
}