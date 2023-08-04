const basketService = require('../service/basket-service');

class basketController {

  async getBasketUser(req, res) {
    try {
      const { userId } = req.body;
      const basket_user = await basketService.getBasket(userId);
      return res.json(basket_user);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async addProductBasket(req, res) {
    try {
      const { userId, productId } = req.body;
      const add_product = await basketService.addInBasket(userId, productId);
      return res.json(add_product);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async deleteProductInBasket(req, res) {
    try {
      const { userId, productId } = req.body;
      const delete_product = await basketService.deleteProductBasket(userId, productId);
      return res.json(delete_product);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }
}

module.exports = new basketController;