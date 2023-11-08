const { User } = require('../models/user-model');
const { Basket } = require('../models/basket-model');
const bcrypt = require('bcrypt')
const TokenService = require('../service/token-service');
const AuthError = require('../exceptions/authError');

class UserDto {
  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.role = model.role;
  }
}

class UserService {

  async registration(email, password) {

    const user_email = await User.findOne({ where: { email } });
    if (user_email) {
      throw AuthError.BadRequest(`Пользователь с email: ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const create_user = await User.create({ email, password: hashPassword });
    const create_basket = await Basket.create({ userId: create_user.id });
    const payload = new UserDto(create_user);
    const token = TokenService.generateAccessToken({...payload});
    return { token, user: payload };
  }

  async login(email, password) {

    const user = await User.findOne({ where: { email } });
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (user && comparePassword) {
      const payload = new UserDto(user);
      const token = TokenService.generateAccessToken({...payload});
      return { token, user: payload };
    }
    else {
      throw AuthError.BadRequest("Некорректные данные");
    }
  }

  async refresh(refreshToken) {

    if (!refreshToken) {
      console.log('error refreshToken');
      throw ApiError.UnauthorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    if (!userData) {
      console.log('error userData');
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findOne({ where: { email: userData.email } });
    const payload = new UserDto(user);
    const token = TokenService.generateAccessToken({...payload});
    return {token, user: payload};
  }

  // Service users (test postman). For the admin panel.
/*
  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }

  async addUser(email_user, password_user, role_user) {
    const user_email = await User.findOne({ where: { email_user } });
    if (user_email) {
      throw AuthError.BadRequest(`Пользователь с email: ${email_user} уже существует`);
    }
    const create_user = await User.build({ email: email_user, password: password_user, role: role_user });
    await create_user.save();
    return create_user;
  }

  async deleteUser(id) {
    const user = await User.findOne({ where: { id } });
    const delete_user = await user.destroy();
    return `Пользователь с id:${id} удален`;
  }

  async updateUser(id, email_user, password_user, role_user) {

    const user_email = await User.findOne({ where: { email_user } });
    if (user_email) {
      throw AuthError.BadRequest(`Пользователь с email: ${email_user} уже существует`);
    }
    const user = await User.findOne({ where: { id } });
    user.email = email_user;
    user.password = password_user;
    user.role = role_user;
    await user.save();
    const update_user = await user.reload();
    return update_user;
  }
*/
}

module.exports = new UserService();