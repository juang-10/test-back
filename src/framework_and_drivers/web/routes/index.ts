import { Router } from 'express';
import { router as mainRouter } from './main';

const routes = Router();

routes.use('/', mainRouter);

export { routes };