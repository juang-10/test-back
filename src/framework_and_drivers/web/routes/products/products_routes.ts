import { Router } from 'express';
import { ProductsController } from '../../../../domain/modules/products/interface_adapters/web/controllers/products_controller';

const productsCtrl = new ProductsController();

const router = Router();

router.get('/get-all', productsCtrl.get);
router.post('/create-one', productsCtrl.post);

export { router };
