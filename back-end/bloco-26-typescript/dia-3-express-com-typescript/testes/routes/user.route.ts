import { Router, Application } from 'express';
import UserController from '../controllers/user.controller';

// const route = Router();

// const controller = new UserController();

// route.get('/', controller.getAll);
// route.get('/:id', controller.getById);

// export default route;

export class Route {
  public controller = new UserController();

  public user(app: Application): void {
    app.get('/users/:id',(req, res, next) => this.controller.getById(req, res, next));
    app.get('/users',(req, res, next) => this.controller.getAll(req, res, next));
  }
}
