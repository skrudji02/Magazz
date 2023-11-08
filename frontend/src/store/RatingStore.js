import RatingService from '../services/RatingService';
import { makeAutoObservable } from "mobx";
import jwt_decode from 'jwt-decode';

export default class RatingStore {


  async setRating(rate, productId, userId) {
    try {
      console.log('sxsxsxss');
      console.log(userId);
      const response = await RatingService.setRatingUser(rate, productId, userId);
      return;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async getTopProduct() {
    try {
      const response = await RatingService.getRecomProduct();
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
}