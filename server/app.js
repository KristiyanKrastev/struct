import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes";

// red flag for problems here:
const Promise = require('bluebird');
mongoose.Promise = global.Promise;
Promise.promisifyAll(mongoose);


mongoose.connect('mongodb://localhost:27017/struct', ()=> {
    console.log("connected to mongodb -> db ->struct");
});
mongoose.set('debug', true);

//mongoose.Promise = require('bluebird');

const app = express();


//https://github.com/expressjs/body-parser
// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// Middleware
app.use(jsonParser);


app.use('/api', routes);


export default app;