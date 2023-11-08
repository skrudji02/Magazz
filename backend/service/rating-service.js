const { Rating } = require('../models/rating-model');
const { Product } = require('../models/product-model');
const sequelize = require('../db');

class RatingService {
  
  async getRatingOneProduct(userId, id) {
    const rating = await Rating.findOne({ where: {userId: userId, productId: id} });
    return rating;
  }

  async setRating(rate, userId, productId) {
    const rating = await Rating.build({ rate, userId, productId});
    await rating.save();
    return rating;
  }

  async writeRatingProduct(productId, rate) {
    const rating_product = await Rating.findAll({
      attributes: [[sequelize.fn('AVG', sequelize.col('rate')), 'rating']],
      raw: true,
      where: {productId: productId}
    });
    console.log(rating_product[0].rating);
    const product = await Product.findOne({ where: { id: productId } });
    product.rating = Number(rating_product[0].rating).toFixed(1);
    await product.save();
    const update_product = await product.reload();
    return update_product;
  }

  async bestProduct() {
    const topProducts = await Product.findAll({
      order: [["rating", "DESC"]],
      limit: 3,
    });
    return topProducts;
    /*let list_products = [];
    for(let product of products){
      const { count }  = await Rating.findAndCountAll({ where: {productId: product.id, rate: 2} })
      if(count > 0){
        list_products.push({count, product });
        if(list_products.length === 3){
          break;
        }
      }
    }
    list_products.sort((a, b) => {
      if (a.count > b.count) {
        return -1;
      } else if (a.count === b.count) {
        return 0;
      } else {
        return 1;
      }
    });

    return { list_products };*/
  }

}

module.exports = new RatingService;