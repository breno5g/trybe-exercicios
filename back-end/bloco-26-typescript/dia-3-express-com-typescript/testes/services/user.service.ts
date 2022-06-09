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
}
