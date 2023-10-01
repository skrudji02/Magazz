import { $host } from '../http';

export default class RatingService {

  static getRecomProduct() {
    return $host.get('/home');
  }

  static setRatingUser(rate, userId, productId) {
    return $host.post(`/product/guitar/${productId}`, { rate, userId, productId });
  }
}