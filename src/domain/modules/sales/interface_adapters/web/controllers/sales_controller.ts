
import { HTTPCodesEnum } from '../../../../../../domain/common/dto/enums/errors_enums';
import BaseController from '../../../../../../domain/common/bases/base_controller';
import {  salesMapper } from "../controllers/mappers/sales_mapper";
import salesService from '../../../../sales/app_business_rules'
import { ApiResponse } from '../../../../../../domain/common/dto/reponses/api_responses';
import { ListResponse } from '../../../../../../domain/common/dto/reponses/list_responses';
// import { ListResponse } from '../../../../../common/dto/reponses/list_responses';

export class SalesController extends BaseController {

    async get(req: any, res: any, next: any): Promise<void> {
        try {
            const { filter, limit, offset } = req.query;
                const resultDom: any[] = await salesService.getList(filter, limit, offset);
                const count: number = await salesService.countList(filter)
                const resultApi: any[] = resultDom.map(result => salesMapper.fromDomToApi(result));
                res.status(HTTPCodesEnum.SUCCESSFUL);
                res.json(new ApiResponse(
                    HTTPCodesEnum.SUCCESSFUL,
                    new ListResponse(resultApi, count)
                ));
        } catch (error) {
            next(error);
        }
        
    }

    async getById(req: any, res: any, next: any): Promise<void> {
        throw new Error("TO DO");
    }

    async post(req: any, res: any, next: any): Promise<void> {
        try {
            const itemMapped = salesMapper.fromApiToDom(req.body);
            const resDom = await salesService.createOne(itemMapped);
            const resApi = salesMapper.fromDomToApi(resDom);
            res.status(HTTPCodesEnum.CREATED);
            res.json(new ApiResponse(HTTPCodesEnum.CREATED, resApi));
        } catch (error) {
        next(error);
        }
    }

    async put(req: any, res: any, next: any): Promise<void> {
        throw new Error("TO DO");
    }

    async delete(req: any, res: any, next: any): Promise<void> {
        throw new Error("TO DO");
    }
}
