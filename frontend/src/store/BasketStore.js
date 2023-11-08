import BasketService from '../services/BasketService';

export default class BasketStore {

  async getUserBasket(userId) {
    try {
      const response = await BasketService.getBasketUser(userId);
      console.log(response.data)
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async addInBasket(userId, productId, quantity) {
    try {
      const response = await BasketService.addInBasketUser(userId, productId, quantity);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async deleteFromBasket(userId, productId) {
    try {
      const response = await BasketService.deleteProductBasket(userId, productId);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
}