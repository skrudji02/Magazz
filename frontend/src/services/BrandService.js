import { $host } from '../http';

export default class BrandService {

  static getBrand() {
    return $host.get("/product/brand");
  }

  static addBrand(name_brand) {
    return $host.post("/product/addBrand", { name_brand });
  }

  static deleteBrand(id) {
    return $host.delete(`/product/brand/${id}`, { id });
  }

}