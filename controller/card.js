class Basket{
    async getProductsUser(req,res) {
       console.log(req.user);
       res.render('shoppingСart')
    }
        
}

module.exports = new Basket()