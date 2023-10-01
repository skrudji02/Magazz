const basketService = require('../service/basket-service');

class basketController {

  async getBasketUser(req, res) {
    try {
      const { userId } = req.query;
      console.log(userId);
      const basket_user = await basketService.getBasket(userId);
      console.log(basket_user);
      return res.json(basket_user);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async addProductBasket(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const add_product = await basketService.addInBasket(userId, productId, quantity);
      return res.json(add_product);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка добавления товара !!!');
    }
  }

  async deleteProductInBasket(req, res) {
    try {
      const { userId, productId } = req.query;
      const delete_product = await basketService.deleteProductBasket(userId, Number(productId));
      return res.json(delete_product);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }
}

module.exports = new basketController;