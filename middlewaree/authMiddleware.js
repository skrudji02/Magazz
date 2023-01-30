const jwt = require('jsonwebtoken');
const {secret} = require("../config");

module.exports = (req, res, next)=>{
    if(req.method === "OPTIONS"){
        next();
    }
    
    try{
        const token = req.headers.cookie.split('=')[1];
        if(!token)
            return res.status(403).render('Пользователь не авторизован1');

        const decodedData = jwt.verify(token, secret);
        //req.user = decodedData;// новое поле user
        next();

    }catch(err){
        console.log(err);
        return res.status(403).render('Пользователь не авторизован2');
    }
}