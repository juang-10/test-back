import { Router } from 'express';
import { router as mainRouter } from './main';
import { router as productsRouter } from './products_routes';

const routes = Router();
routes.use('/', mainRouter);
routes.use('/api/v1/products', productsRouter);

export { routes };