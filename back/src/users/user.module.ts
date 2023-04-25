import UserRepository from './user.repository';
import UserService from './user.service';
import UserController from './user.controller';

const userRepository = new UserRepository()
const userService = new UserService({ userRepository })
export const userController = new UserController({ userService })