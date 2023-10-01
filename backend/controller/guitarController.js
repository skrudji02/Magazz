const guitarService = require('../service/guitar-service');
const ratingService = require('../service/rating-service');

class guitarController {

  async getGuitars(req, res) {
    const { typeId, brandsId } = req.query;

    try {
      if (typeId) {
        const guitars = await guitarService.getTypeGuitar(typeId);
        if (brandsId) {
          for (let i = 0; i < brandsId.length; i++) {
            brandsId[i] = Number(brandsId[i]);
          }
          return res.json(guitars.filter((guitar) => {
            for (let brand of brandsId) {
              if (guitar.brandId === brand)
                return guitar;
            }
          }));
        }
        return res.json(guitars);
      }
      else {
        const guitars = await guitarService.getAllGuitar();
        if (brandsId) {
          for (let i = 0; i < brandsId.length; i++) {
            brandsId[i] = Number(brandsId[i]);
          }
          return res.json(guitars.filter((guitar) => {
            for (let brand of brandsId) {
              if (guitar.brandId === brand)
                return guitar;
            }
          }));
        }
        return res.json(guitars);
      }
    }
    catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товаров !!!');
    }
  }

  async getOneGuitar(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.query;
      const guitar = await guitarService.getOneGuitar(Number(id));
      const ratingProduct = await ratingService.getRatingOneProduct(Number(userId), Number(id));
      return ratingProduct === null ? res.json({guitar: guitar}) : res.json({guitar: guitar, ratingProduct: ratingProduct.rate});
    }
    catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async addGuitar(req, res) {
    try {
      const { name, price, img, typeId, brandId } = req.body;
      console.log(img)
      const guitar = await guitarService.addGuitar(name, price, img, typeId, brandId);
      return res.json(guitar);
    }
    catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async deleteGuitar(req, res) {
    try {

      const { id } = req.params;
      console.log(id);
      const delete_guitar = await guitarService.deleteGuitar(id);
      return res.json(delete_guitar);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async updateGuitar(req, res) {
    try {
      const { id, name, price, img, typeId, brandId } = req.body;
      const update_guitar = await guitarService.updateGuitar(id, name, price, img, typeId, brandId);
      return res.json(update_guitar);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async getTypes(req, res) {
    try {
      const types = await guitarService.getTypes();
      return res.json(types);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async addType(req, res) {
    try {
      const { name_type } = req.body;
      console.log(name_type)
      const create_type = await guitarService.addType(name_type);
      return res.json(create_type);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

  async deleteType(req, res) {
    try {
      const { id } = req.params;
      const create_type = await guitarService.deleteType(id);
      return res.json(create_type);
    } catch (err) {
      console.log(err);
      return res.status(400).render('Ошибка получения товара !!!');
    }
  }

}


module.exports = new guitarController();