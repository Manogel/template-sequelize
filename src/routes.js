import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import uploadConfig from './config/upload';

import ValidateUserStore from './app/validators/UserStore';
import ValidateUserUpdate from './app/validators/UserUpdate';
import ValidateSessionStore from './app/validators/SessionStore';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', ValidateSessionStore, SessionController.store);

routes.post('/users', ValidateUserStore, UserController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.put('/users', ValidateUserUpdate, UserController.update);

routes.get('/dashboard', (req, res) => {
  return res.json({ ok: true });
});

export default routes;
