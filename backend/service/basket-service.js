const { Basket, BasketProduct } = require('../models/basket-model');
const { Product } = require('../models/product-model');

class BasketService {

  async getBasket(userId) {
    const basket_user = await Basket.findOne({ where: { userId }, include: BasketProduct });
    let productBasket = [];
    for(let product of basket_user.basket_products){
      let id = product.productId;
      productBasket.push(await Product.findOne({ where: { id }}));
    }
    return productBasket;
  }

  async addInBasket(userId, productId) {
    const basketId = await Basket.findOne({ where: { userId } });
    const add_product = await BasketProduct.build({ basketId: basketId.id, productId: productId });
    await add_product.save();
    return add_product;
  }

  async deleteProductBasket(userId, productId) {
    const basket_user = await Basket.findOne({ where: { userId }, include: BasketProduct });
    for (let product of basket_user.basket_products) {
      if (product.productId === productId) {
        await product.destroy();
      }
    }
    return `Продукт с id:${productId} удален`;
  }
}

module.exports = new BasketService;