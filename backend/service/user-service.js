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
        const role = create_user.role;
        const payload = {
            email,
            password,
            role
        };
        const token = TokenService.generateAccessToken(payload);
        return token;
    }

    async login(email, password){

        const user = await User.findOne({where: {email}});
        if(user && user.password == password){
            const role = user.role;
            const payload = {
                email,
                password,
                role
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
    
        if (!userData) {
            throw ApiError.UnauthorizedError();
        }
        const email = userData.email;
        const user = await User.findOne({where: {email}});
        const password = user.password;
        const role = user.role;
        const payload = {
            email,
            password,
            role
        };
        const token = TokenService.generateAccessToken(payload);

        return token;
    }

    // Service users (test postman). For the admin panel.

    async getAllUsers() {   
        const users = await User.findAll();
        return users;
    }

    async addUser(email_user, password_user, role_user) {   
        const user_email = await User.findOne({where: {email_user}});
        if(user_email){    
             throw AuthError.BadRequest(`Пользователь с email: ${email_user} уже существует`);
        }
        const create_user = await User.build({ email: email_user, password: password_user, role: role_user });
        await create_user.save();
        return create_user;
    }

    async deleteUser(id){
        const user = await User.findOne({where: {id}});
        console.log(user);
        const delete_user = await user.destroy();
        return `Пользователь с id:${id} удален`;
    }

    async updateUser(id, email_user, password_user, role_user){

        const user_email = await User.findOne({where: {email_user}});
        if(user_email){    
             throw AuthError.BadRequest(`Пользователь с email: ${email_user} уже существует`);
        }
        const user = await User.findOne({where: {id}});
        user.email = email_user;
        user.password = password_user;
        user.role = role_user;
        await user.save();
        const update_user = await user.reload();
        return update_user;
    }

}

module.exports = new UserService();