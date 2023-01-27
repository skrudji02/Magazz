const express = require('express')
const { engine } = require ('express-handlebars')
var bodyParser = require('body-parser')
const guitarRouter = require('./routes/guitar_routes')

const port = process.env.PORT || 3000

const app = express()
const urlencodedParser = express.urlencoded({extended: false});

app.engine('handlebars', engine({extname:'.handlebars',defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(bodyParser.json())

app.use(urlencodedParser)

app.use(express.static(__dirname + '/public'))

app.use('/magazz', guitarRouter)

app.get('/', (req,res)=>{
    res.status(200).render('product')
})

try{
    app.listen(port, ()=>{
    console.log(`Server run http://localhost:${port}/magazz/guitar`)
})
}catch(e){
    console.log(e)
}