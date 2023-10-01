const { check } = require('express-validator');
const {validationResult} = require('express-validator');

const validatorResult = (req, res, next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json("Bad Validation");
  }

  next();
}

const validationAuth = [
  check('email').isEmail(),
  check('password').notEmpty().trim().isLength({min: 8}), validatorResult, 
];

module.exports = {
  validationAuth,
};