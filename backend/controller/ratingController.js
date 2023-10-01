const ratingService = require('../service/rating-service');

class ratingController {

  async setRatingProduct(req, res) {
    try {
      const { rate, userId, productId } = req.body;
      const rating_product = await ratingService.setRating(Number(rate), userId, productId);
      return res.json(rating_product);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

}

module.exports = new ratingController;