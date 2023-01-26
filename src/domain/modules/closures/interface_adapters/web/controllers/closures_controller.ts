import { HTTPCodesEnum } from '../../../../../common/dto/enums/errors_enums';
import BaseController from '../../../../../common/bases/base_controller';
import { closuresMapper } from './mapppers/closures_mappers';
import closuresService from '../../../app_business_rules';
import { ApiResponse } from '../../../../../common/dto/reponses/api_responses';
import { ListResponse } from '../../../../../common/dto/reponses/list_responses';

export class ClosuresController extends BaseController {
  async get(req: any, res: any, next: any): Promise<void> {
    try {
      const { filter, limit, offset } = req.query;
      const resultDom: any[] = await closuresService.getList(
        filter,
        limit,
        offset
      );
      const count: number = await closuresService.countList(filter);
      const resultApi: any[] = resultDom.map((result) =>
        closuresMapper.fromDomToApi(result)
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
      const itemMapped = closuresMapper.fromApiToDom(req.body);
      const resDom = await closuresService.createOne(itemMapped);
      const resApi = closuresMapper.fromDomToApi(resDom);
      res.status(HTTPCodesEnum.CREATED);
      res.json(new ApiResponse(HTTPCodesEnum.CREATED, resApi));
    } catch (error) {
      next(error);
    }
  }

  async put(req: any, res: any, next: any): Promise<void> {
    throw new Error('TO DO');
  }

  async delete(req: any, res: any, next: any): Promise<void> {
    throw new Error('TO DO');
  }
}
