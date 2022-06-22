import { Router } from "express";
import multer from 'multer'
import configmulter from '../src/config/multer'

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import ProductControler from "./app/controllers/ProductControler";

const upload=multer(configmulter);
const routes = new Router();

routes.post("/users",UserController.store)
routes.post("/session",SessionController.store)
routes.post("/products",upload.single('file'),ProductControler.store)

export default routes;
