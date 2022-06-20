import { NewError } from '../helper';
import { UserInterface } from '../interfaces';
import { UserModel } from '../models/user.model';

export class UserService {
  private model: UserModel;
  constructor() {
    this.model = new UserModel();
  }

  public async getAll() {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: string) {
    const user = await this.model.getById(id);
    if (!user) {
      new NewError(404, "User not found")
    }
    return user;
  }
}

// const teste = new UserService();

// teste.getById(15);
