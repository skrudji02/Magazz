const jwt = require('jsonwebtoken');
const secret = require('../config');

class TokenService{
    generateAccessToken(payload)
    {
        const accessToken = jwt.sign(payload, secret.SECRET, {expiresIn: '15h'});
        const refreshToken = jwt.sign(payload, secret.REFRESH_SECRET, {expiresIn: '30h'});      
        return {accessToken, refreshToken}
    }

    validateAccessToken(token) {
        
        try {
            const userData = jwt.verify(token, secret.SECRET);
            return userData;
        } catch (err) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            console.log('token', token)
            const userData = jwt.verify(token, secret.REFRESH_SECRET);
            return userData;
        } catch (err) {
            return null;
        }
    }

}

module.exports = new TokenService();