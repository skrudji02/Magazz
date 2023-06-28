const userService = require('../service/user-service');

class authController{

    async getUsers(req, res, next){
        try{
            const users = await userService.getAllUsers();
            return res.json(users);
        }
        catch(err){
            next(err);
        }
    }

    async registration(req, res, next){

        try{
            const {email, password} = req.body;
            const create_user = await userService.registration(email, password);
            res.cookie("refreshToken", create_user.refreshToken); 
            return res.json(create_user);     
        }
        catch(err){
            next(err);
        }
    }    

    async login(req, res, next) {

        try {
            const {email, password} = req.body;
            const create_user = await userService.login(email, password);
            res.cookie("refreshToken", create_user.refreshToken); 
            return res.json(create_user); 
           
        } catch (err) {
            next(err);
        }
    }

    async logout(req, res, next){
        try {
            const cookie = req.cookie;
            res.clearCookie("refreshToken"); 
            return res.json({}); 
           
        } catch (err) {
            next(err);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            //console.log(userData);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }


}

module.exports = new authController();