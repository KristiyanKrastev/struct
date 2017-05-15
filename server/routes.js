import express from "express";

//controller imports
import baseController from "./controllers/baseController";
import userController from "./controllers/userController";
import seedUsersController from "./controllers/seedUsersController";
import seedCompanyController from "./controllers/seedCompanyController";
import companyController from "./controllers/companyController";

const routes = express();

//base routes
routes.get('/', baseController.get);

//user routes
routes.post('/signup', userController.post);
routes.get('/users', userController.getAll);
routes.post('/seedusers', seedUsersController.seed);
routes.post('/seedcompany', seedCompanyController.seed);
routes.put('/updatecompanydescription/:id', companyController.editDescription);



export default routes;