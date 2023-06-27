const AuthError = require('../exceptions/authError');
const TokenService = require('../service/token-service');

module.exports = function(req, res, next){
    try{
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(AuthError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(AuthError.UnauthorizedError());
        }

        const userData = TokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(AuthError.UnauthorizedError());
        }
        //console.log(`Middle: ${userData}`);
        req.user = userData;
        next();

    }catch(err){
        return next(AuthError.UnauthorizedError());
    }
}