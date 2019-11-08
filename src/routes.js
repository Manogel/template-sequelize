import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);
// Rotas privadas apartir daqui
routes.put('/users', UserController.update);

export default routes;
