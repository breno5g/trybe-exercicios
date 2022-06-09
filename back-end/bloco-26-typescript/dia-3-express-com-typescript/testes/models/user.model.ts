import { UserInterface } from '../interfaces';
import { SqlType } from '../types';
import { Connection } from './connection';

export class UserModel extends Connection {
  constructor() {
    super();
  }

  private parse(data: SqlType) {
    return JSON.parse(JSON.stringify(data));
  }

  public async getAll(): Promise<UserInterface[]> {
    const query = 'SELECT * FROM Users';
    const [data] = await this.connection.execute(query);
    return this.parse(data);
  }

  public async getById(id: string): Promise<UserInterface> {
    const query = 'SELECT * FROM Users WHERE id=?';
    const [data] = await this.connection.execute(query, [id]);
    return this.parse(data)[0];
  }
}
