const {User} = require('../models/user-model');
const TokenService = require('../service/token-service');
const AuthError = require('../exceptions/authError');

class UserService{

    async registration(email, password){

        const user_email = await User.findOne({where: {email}});
        if(user_email){    
             throw AuthError.BadRequest(`Пользователь с email: ${email} уже существует`);
        }
        const create_user =  await User.create({email, password});
        const payload = {
            email,
            password
        };
        const token = TokenService.generateAccessToken(payload);
        return token;
    }

    async login(email, password){

        const user = await User.findOne({where: {email}});
        if(user && user.password == password){
            const payload = {
                email,
                password
            };
            const token = TokenService.generateAccessToken(payload);
            return token; 
        }
        else{
            throw AuthError.BadRequest("Некорректные данные"); 
        }
        
    }

    async refresh(refreshToken) {
        
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = TokenService.validateRefreshToken(refreshToken);
        console.log(userData);
        if (!userData) {
            throw ApiError.UnauthorizedError();
        }
        const email = userData.email;
        const user = await User.findOne({where: {email}});
        const password = user.password;
        const payload = {
            email,
            password
        };
        const token = TokenService.generateAccessToken(payload);

        return token;
    }

    async getAllUsers() {   
        const users = await User.findAll();
        return users;
    }

}

module.exports = new UserService();