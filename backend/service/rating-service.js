const { Rating } = require('../models/product-model');
const { Product } = require('../models/product-model');

class RatingService {
  
  async getRatingOneProduct(userId, id) {
    console.log(id);
    console.log(userId);
    const rating = await Rating.findOne({ where: {userId: userId, productId: id} });
    console.log(rating);
    return rating;
  }

  async setRating(rate, userId, productId) {
    const rating = await Rating.build({ rate, userId, productId});
    await rating.save();
    return rating;
  }

  async bestProductByRating() {
    const products = await Product.findAll();
    let list_products = [];
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

    return { list_products };
  }

}

module.exports = new RatingService;