import { Router } from 'express';
import { router as mainRouter } from './main';
import { router as productsRouter } from './products/products_routes';
import { router as salesRouter } from './sales/sales_routes';

const routes = Router();
routes.use('/', mainRouter);
routes.use('/api/v1/products', productsRouter);
routes.use('/api/v1/sales', salesRouter);

export { routes };