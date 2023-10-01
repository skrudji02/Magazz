const ratingService = require('../service/rating-service');

class Home{

    async renderHome(req, res){
      try {
        const recommend_products = await ratingService.bestProductByRating();
        return res.json(recommend_products);
      }
      catch (err) {
        console.log(err);
        return res.status(400).render('Ошибка получения товара !!!');
      }
    }
}

module.exports = new Home();