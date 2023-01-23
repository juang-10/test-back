import { Router } from 'express';
import { ProductsController } from '../../../interface_adapters/controllers/products_controller';

const productsCtrl = new ProductsController();

const router = Router();

router.get('/get-all', productsCtrl.get);
router.post('/create-one', productsCtrl.post);

export { router };
