import { $host } from '../http';

export default class BasketService {

  static getBasketUser(userId) {
    return $host.get(`/basket?userId=${userId}`, { userId });
  }

  static addInBasketUser(userId, productId) {
    return $host.post('/basket', { userId, productId });
  }

  static deleteProductBasket(userId, productId) {
    return $host.delete(`/basket?userId=${userId}&productId=${productId}`, { userId, productId });
  }
}