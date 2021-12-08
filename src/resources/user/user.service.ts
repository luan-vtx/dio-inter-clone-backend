/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { getRepository } from 'typeorm';
import md5 from 'crypto-js/md5';

import User from '../../entity/User';
import AppError from '../../shared/error/AppError';

import { UserSignIn } from './dtos/user.signin.dtos';
// import { UserSignUp } from './dtos/user.signup.dtos';

class UserService {
  async signin(user: UserSignIn) {
    const userRepository = getRepository(User);

    const { email, password } = user;
    const passwordHash = md5(password).toString();

    const existUser = await userRepository.findOne({ where: { email, password: passwordHash } });

    if (!existUser) {
      throw new AppError('Usuário não encontrado', 401);
    }

    return existUser;
  }

  // async signup(user: UserSignUp) {
  // }
}

export default UserService;
