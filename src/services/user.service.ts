import config from '../config';
import { IUser } from '../models/user.interface';

export const getUser = async (): Promise<IUser> => {
  const userData: IUser = { name: 'Rakesh Lakshminarayana', token: config.secret.token };
  return userData;
};
