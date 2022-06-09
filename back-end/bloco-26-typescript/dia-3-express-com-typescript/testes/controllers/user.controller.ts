import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { StatusCodes } from 'http-status-codes';

class UserController {
  private service: UserService;
  constructor() {
    this.service = new UserService();
    // É necessario o bind ao inicializar pois no route estou usando uma função comum
    // Graças a isso ela enfia o this no bumbum
    this.getAll = this.getAll.bind(this);
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.service.getAll();
      res.status(StatusCodes.OK).json({ data: users });
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
