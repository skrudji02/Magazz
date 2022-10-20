const express = require('express')
const { engine } = require ('express-handlebars')
var bodyParser = require('body-parser')
const guitarRouter = require('./routes/guitar_routes')

const port = process.env.PORT || 3000

const app = express()

app.engine('handlebars', engine({extname:'.handlebars',defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.use('/api', guitarRouter)

app.get('/', (req,res)=>{
    res.status(200).render('product')
})

try{
    app.listen(port, ()=>{
    console.log(`Server run http://localhost:${port}`)
})
}catch(e){
    console.log(e)
}