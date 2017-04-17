import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes";
mongoose.connect('mongodb://localhost:27017/struct', ()=> {
    console.log("connected to mongodb -> db ->struct");
})

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api', routes);


export default app;