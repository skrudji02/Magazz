const ratingService = require('../service/rating-service');

class Home {

  async topProduct(req, res) {
    try {
      const recommend_products = await ratingService.bestProduct();
      return res.status(200).json(recommend_products);
    }
    catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товаров !!!');
    }
  }
}

module.exports = new Home();