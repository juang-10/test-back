import { Router } from 'express';
import { SalesController } from '../../../../domain/modules/sales/interface_adapters/web/controllers/sales_controller';


const salesCtrl = new SalesController();

const router = Router();

router.get('/get-all', salesCtrl.get);
router.post('/create-one', salesCtrl.post);
router.delete('/:id/delete-one', salesCtrl.delete);
router.put('/:idUpd/update-one', salesCtrl.put);

export { router };
