import BasketService from '../services/BasketService';
import jwt_decode from 'jwt-decode';

export default class BasketStore {

  async userId(){
    return jwt_decode(localStorage.getItem('token')).id;
  }

  async getUserBasket() {
    try {
      const userId = await this.userId();
      const response = await BasketService.getBasketUser(userId);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async addInBasket(productId) {
    try {
      const userId = await this.userId();
      const response = await BasketService.addInBasketUser(userId, productId);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async deleteFromBasket(productId) {
    try {
      const userId = await this.userId();
      const response = await BasketService.deleteProductBasket(userId, productId);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
}