import { HTTPCodesEnum } from '../../domain/dto/enums/errors_enums';
import BaseController from './bases/base_controller';
import { productsMapper } from './mappers/products_mapper';
import productsStore from '../../domain/uses_cases/products'
import { ApiResponse } from '../../domain/dto/reponses/api_responses';
import { ListResponse } from '../../domain/dto/reponses/list_responses';



export class ProductsController extends BaseController {

    async get(req: any, res: any, next: any): Promise<void> {
        try {
            const { filter, limit, offset } = req.query;
                const resultDom: any[] = await productsStore.getList(filter, limit, offset);
                const count: number = await productsStore.countList(filter);
                const resultApi: any[] = resultDom.map(result => productsMapper.fromDomToApi(result));
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
        const itemMapped = productsMapper.fromApiToDom(req.body);
        const resDom = await productsStore.createOne(itemMapped);
        const resApi = productsMapper.fromDomToApi(resDom);
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
