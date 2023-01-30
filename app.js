const express = require('express');
const { engine } = require ('express-handlebars');
var bodyParser = require('body-parser');
const router = require('./routes/index');

const port = process.env.PORT || 3000;

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.engine('handlebars', engine({extname:'.handlebars', defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(bodyParser.json());

app.use(urlencodedParser);

app.use(express.static(__dirname + '/public'));

app.use('/', router);

try{
    app.listen(port, ()=>{
    console.log(`Server run http://localhost:${port}/magazz/guitar`);
})
}catch(e){
    console.log(e);
}