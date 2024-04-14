import express from 'express';
import {
  createUser,
  deleteUser,
  findUserList,
  logOut,
  login,
  register,
  updateUser,
  userList,
} from '../../controllers/v1/user.js';

const authRoutes = express.Router();
authRoutes.post('/login', login);
authRoutes.post('/register', register);
authRoutes.post('/logout', logOut);

authRoutes.post('/user', createUser);
// authRoutes.get('/users', userList);
authRoutes.get('/users', findUserList);
authRoutes.patch('/users/:id', updateUser);
authRoutes.delete('/users/:id', deleteUser);
export { authRoutes };
