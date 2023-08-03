import BrandService from '../services/BrandService';

export default class BrandStore {

  async getBrand() {
    try {
      const response = await BrandService.getBrand();
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async addBrand(name) {
    try {
      const response = await BrandService.addBrand(name);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async deleteBrand(id) {
    try {
      const response = await BrandService.deleteBrand(id);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

}