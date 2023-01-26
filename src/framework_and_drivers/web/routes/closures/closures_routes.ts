import { ClosuresController } from './../../../../domain/modules/closures/interface_adapters/web/controllers/closures_controller';
import { Router } from 'express';

const closuresCtrl = new ClosuresController();

const router = Router();

// router.get('/get-all', closuresCtrl.get);
router.post('/create-one', closuresCtrl.post);

export { router };
