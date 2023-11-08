const AuthError = require('../exceptions/authError');
const tokenService = require('../service/token-service');

module.exports = async function(req, res, next){
    try{
      console.log('sssssssssssssssssssssssssssssssssss');
        const authorizationHeader = req.headers.authorization;
        console.log(authorizationHeader);
        if (!authorizationHeader) {
            return next(AuthError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(AuthError.UnauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(AuthError.UnauthorizedError());
        }
        
        req.user = userData;
        console.log('sssssssssssssssssssssssssssssssssss');
   
 
        next();

    }catch(err){
        return next(AuthError.UnauthorizedError());
    }
};