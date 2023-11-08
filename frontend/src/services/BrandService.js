import { $host } from '../http';

export default class BrandService {

  static getBrand() {
    return $host.get("/catalog/brand");
  }

  static addBrand(name_brand) {
    return $host.post("/product/brand", { name_brand });
  }

  static deleteBrand(id) {
    return $host.delete(`/product/brand/${id}`, { id });
  }

}