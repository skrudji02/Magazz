const jwt = require('jsonwebtoken');
const {secret} = require("../controller/config");


module.exports = function(roles){
    return function(req, res, next){
        if(req.method === "OPTIONS"){
            next();
        }

        try{
            //res.clearCookie("Bearer=");
            const token = req.headers.cookie.split('=')[1];//token_get.split(' ')[1];//req.headers["authorization"];//req.headers.authorization.split(' ')[1];
            if(!token)
                return res.status(403).render('Пользователь не авторизован1');
            
            const {roles: userRoles} = jwt.verify(token, secret)
            console.log(userRoles);
            let hasRole = false
            
                if (roles.includes(userRoles)) {
                    hasRole = true
                }
            
            if (!hasRole) {
                return res.status(403).json({message: "У вас нет доступа"})
        }
        next();

        }catch(err){
            console.log(err);
            return res.status(403).render('Пользователь не авторизован2');
        }
    }
}