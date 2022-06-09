import { Router } from 'express';
import UserController from '../controllers/user.controller';

const route = Router();

const controller = new UserController();

route.get('/', controller.getAll);

export default route;
