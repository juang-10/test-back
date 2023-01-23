import { Router } from 'express';
import { MainController } from '../../../interface_adapters/controllers/main_cont';

const mainCtrl = new MainController();

const router = Router();
router.get('/', mainCtrl.get);

export { router };