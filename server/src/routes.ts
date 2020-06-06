import express, { request, response } from 'express';
import PoitsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PoitsController();
const itemsController = new ItemsController();

// index: listar vários, show: listar um unico, create, update, delete
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      uf: Joi.string().required().max(2),
      city: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false,
  }),
  pointsController.create
);

export default routes;