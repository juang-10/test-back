import { Router } from 'express';
import { UsersController } from '../../../../domain/modules/users/interface_adapters/web/controllers/users_controller';


const usersCtrl = new UsersController();

const router = Router();

// router.get('/get-all', salesCtrl.get);
router.post('/create-one', usersCtrl.post);
// router.delete('/:id/delete-one', salesCtrl.delete);
// router.put('/:idUpd/update-one', salesCtrl.put);

export { router };
