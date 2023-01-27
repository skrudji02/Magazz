const jwt = require('jsonwebtoken');
const {secret} = require("../controller/config");
const authController = require("../controller/authController");


module.exports = (req, res, next)=>{
    if(req.method === "OPTIONS"){
        next();
    }
    
    try{
        //res.clearCookie("Bearer=");
        const token = req.headers.cookie.split('=')[1];;//token_get.split(' ')[1];//req.headers["authorization"];//req.headers.authorization.split(' ')[1];
        console.log('Token:', token);
        if(!token)
            return res.status(403).render('Пользователь не авторизован1');

        const decodedData = jwt.verify(token, secret);
        console.log(decodedData.roles);
        req.user = decodedData;// новое поле user
        next();

    }catch(err){
        console.log(err);
        return res.status(403).render('Пользователь не авторизован2');
    }
}