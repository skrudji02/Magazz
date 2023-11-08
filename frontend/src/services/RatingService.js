import { $host } from '../http';

export default class RatingService {

  static getRecomProduct() {
    return $host.get('/home');
  }

  static setRatingUser(rate, productId, userId) {
    return $host.post(`/catalog/types/:id/product/${productId}`, { rate, productId, userId });
  }
}