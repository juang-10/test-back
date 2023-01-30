import { HTTPCodesEnum } from '../../../../../../domain/common/dto/enums/errors_enums';
import BaseController from '../../../../../../domain/common/bases/base_controller';
import { usersMapper } from '../controllers/mappers/users_mappers';
import usersService from '../../../../users/app_business_rules';
import { ApiResponse } from '../../../../../../domain/common/dto/reponses/api_responses';
import { ListResponse } from '../../../../../../domain/common/dto/reponses/list_responses';
import { ErrorBadRequest } from '../../../../../common/dto/errors/bad_request_error';

export class UsersController extends BaseController {
  async get(req: any, res: any, next: any): Promise<void> {
    try {
      const { filter, limit, offset } = req.query;
      const resultDom: any[] = await usersService.getList(
        filter,
        limit,
        offset
      );
      const count: number = await usersService.countList(filter);
      const resultApi: any[] = resultDom.map((result) =>
        usersMapper.fromDomToApi(result)
      );
      res.status(HTTPCodesEnum.SUCCESSFUL);
      res.json(
        new ApiResponse(
          HTTPCodesEnum.SUCCESSFUL,
          new ListResponse(resultApi, count)
        )
      );
    } catch (error) {
      next(error);
    }
  }

  async getById(req: any, res: any, next: any): Promise<void> {
    throw new Error('TO DO');
  }

  async post(req: any, res: any, next: any): Promise<void> {
    try {
      const itemMapped = usersMapper.fromApiToDom(req.body);
      const resDom = await usersService.createOne(itemMapped);
      const resApi = usersMapper.fromDomToApi(resDom);
      res.status(HTTPCodesEnum.CREATED);
      res.json(new ApiResponse(HTTPCodesEnum.CREATED, resApi));
    } catch (error) {
      next(error);
    }
  }

  async put(req: any, res: any, next: any): Promise<void> {
    // try {
    //   const { idUpd } = req.params;
    //   const idFloat = parseInt(idUpd);
    //   const { id } = req.body;
    //   if (id !== idFloat) throw new ErrorBadRequest("ID don't match");
    //   const resultDOM: any = await usersService.updateOne(id, req.body);
    //   const resultAPI: any = usersMapper.fromDomToApi(resultDOM);
    //   res.status(HTTPCodesEnum.SUCCESSFUL);
    //   res.json(new ApiResponse(HTTPCodesEnum.CREATED, resultAPI));
    // } catch (error) {
    //   next(error);
    // }
  }

  async delete(req: any, res: any, next: any): Promise<void> {
    // try {
    //   const { id } = req.params;
    //   await usersService.deleteOne(id);
    //   res.sendStatus(HTTPCodesEnum.NOT_CONTENT);
    // } catch (error) {
    //   next(error);
    // }
  }
}
