const userService = require('../service/user-service');

class userController{

    async getUsers(req, res, next){
        try{
            const users = await userService.getAllUsers();
            return res.json(users);
        }
        catch(err){
            next(err);
        }
    }

    async addUsers(req, res, next){
        try{
            const {email, password, role} = req.body;
            const users = await userService.addUser(email, password, role);
            return res.json(users);
        }
        catch(err){
            next(err);
        }
    }

    async deleteUsers(req, res, next){
        try{
            const user_id = req.body.id;
            console.log(`controll ${user_id}`);
            const users = await userService.deleteUser(user_id);
            return res.json(users);
        }
        catch(err){
            next(err);
        }
    }

    async updateUsers(req, res, next){
        try{
            const {id, email, password, role} = req.body;
            const user = await userService.updateUser(id, email, password, role);
            return res.json(user);
        }
        catch(err){
            next(err);
        }
    }


}

module.exports = new userController();