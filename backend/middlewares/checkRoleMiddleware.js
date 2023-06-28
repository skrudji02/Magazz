const TokenService = require('../service/token-service');

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const accessToken = req.headers.authorization.split(' ')[1];
            if (!accessToken) {
                return res.status(401).json({message: "Не авторизован"});
            }
            const decoded = TokenService.validateAccessToken(accessToken);
            if (decoded.role !== role) {
                return res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({message: "Не авторизован"});
        }
    };
}