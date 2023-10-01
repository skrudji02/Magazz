import RatingService from '../services/RatingService';
import { makeAutoObservable } from "mobx";
import jwt_decode from 'jwt-decode';

export default class RatingStore {

  async userId(){
    return jwt_decode(localStorage.getItem('token')).id;
  }

  async setRating(rate, productId) {
    try {
      const userId = await this.userId();
      const response = await RatingService.setRatingUser(rate, userId, productId);
      return;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async getTopProduct() {
    try {
      const response = await RatingService.getRecomProduct();
      return response.data.list_products;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
}