import express from "express";

//controller imports
import baseController from "./controllers/baseController";
import userController from "./controllers/userController";

const routes = express();

//base routes
routes.get('/', baseController.get);

//user routes
routes.post('/signup', userController.post);

export default routes;