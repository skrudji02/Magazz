import {$auth}  from '../http';

export default class Authorization {

  static async login(email, password) {
    return $auth.post('/user/login', { email, password });
  }

  static async registration(email, password) {
    return $auth.post('/user/registration', { email, password });
  }

  static async logout() {
    return $auth.post('/user/logout');
  }
}