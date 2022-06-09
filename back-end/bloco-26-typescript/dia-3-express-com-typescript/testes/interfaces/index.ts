export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ErrorInterface extends Error {
  status?: number;
}
