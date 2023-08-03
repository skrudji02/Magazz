import { makeAutoObservable } from "mobx";
import TypeService from '../services/TypeService';

export default class TypeStore {

  async getTypes() {
    try {
      const response = await TypeService.getTypes();
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async addType(name) {
    try {
      const response = await TypeService.addType(name);
      return response.data;
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  async deleteType(id) {
    try {
      const response = await TypeService.deleteType(id);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }
}