class Home{
    async renderHome(req,res){
        res.render('home')
    }
}

module.exports = new Home()