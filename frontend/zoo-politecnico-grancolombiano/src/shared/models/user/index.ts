export interface IUser {
  id: number;
  email: string;
  password?: string;
  role: string;
  fullname: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserInputs {
  email: string;
  password: string;
  role: string;
  fullname: string;
}
