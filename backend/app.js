const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./db');
const cookieParser = require('cookie-parser')
const authController = require('./controller/authController');
const errorMiddleware = require('./middlewares/error-middleware');
const authMiddleware = require('./middlewares/auth-middleware');
const models = require('./models/user-model');
const router = require('./routes/router');
const session = require('express-session');
const passport = require('passport');
const { AppConfig } = require('./config/app.config');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


//app.get('/', authMiddleware, authController.getUsers);
app.use('/magazz', router);
app.use(errorMiddleware); // должен идти самым последним 

async function start(){
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(AppConfig.defaultPort, ()=>{console.log(`Server run http://localhost:${AppConfig.defaultPort}`);})
    }catch(err){
        console.log(err);
    }
}

start();

