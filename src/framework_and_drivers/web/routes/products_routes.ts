import { Router } from 'express';
import { ProductsController } from '../../../interface_adapters/controllers/products_controller';

const productsCtrl = new ProductsController();

const router = Router();

router.post('/create-one', productsCtrl.post);

export { router };
