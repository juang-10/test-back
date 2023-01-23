import { HTTPCodesEnum } from '../../domain/dto/enums/errors_enums';
import BaseController from './bases/base_controller';
import { productsMapper } from './mappers/products_mapper';
import productsStore from '../../domain/uses_cases/products'
import { ApiResponse } from '../../domain/dto/reponses/api_responses';


export class ProductsController extends BaseController {

    async get(req: any, res: any, next: any): Promise<void> {
        throw new Error("TO DO");
        
        // try {
        //     logger.info(`query params: ${JSON.stringify(req.query)}`);
        //     const { filter, limit, offset } = req.query;
        //         logger.info(`filter: ${JSON.stringify(filter)}`);
        //         const resultDom: any[] = await banksSvc.getList(filter, limit, offset);
        //         const count: number = await banksSvc.countList(filter);
        //         const resultApi: any[] = resultDom.map(result => banksMapper.fromDomToApi(result));
        //         res.status(HTTPCodesEnum.SUCCESSFUL);
        //         res.json(new ApiResponse(
        //             HTTPCodesEnum.SUCCESSFUL,
        //             new ListResponse(resultApi, count)
        //         ));
        // } catch (error) {
        // next(error);
        // }
    }

    async getById(req: any, res: any, next: any): Promise<void> {
        throw new Error("TO DO");
        
        // try {
        //         logger.info(`params: ${JSON.stringify(req.params)}`);
        // const { id } = req.params;
        //         const resultDom: any = await banksSvc.getById(id);
        //         const resultApi: any = banksMapper.fromDomToApi(resultDom);
        //         res.status(HTTPCodesEnum.SUCCESSFUL);
        //         res.json(new ApiResponse(HTTPCodesEnum.SUCCESSFUL, resultApi));
        // } catch (error) {
        // next(error);
        // }
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
        // try {
        // logger.info(`body data: ${JSON.stringify(req.body)}`);
        // logger.info(`params: ${JSON.stringify(req.params)}`);
        // const { idUpd } = req.params;
        // const { id } = req.body;
        // if (id !== idUpd) throw new ErrorBadRequest("ID don't match");
        // const resultDOM: any = await banksSvc.updateOne(id, req.body);
        // const resultAPI: any = banksMapper.fromDomToApi(resultDOM);
        // res.status(HTTPCodesEnum.SUCCESSFUL);
        // res.json(new ApiResponse(HTTPCodesEnum.CREATED, resultAPI));
        // } catch (error) {
        // next(error);
        // }
    }

    async delete(req: any, res: any, next: any): Promise<void> {
        throw new Error("TO DO");
        // try {
        // logger.info(`params: ${JSON.stringify(req.params)}`);
        // const { id } = req.params;
        // await banksSvc.deleteOne(id);
        // res.sendStatus(HTTPCodesEnum.NOT_CONTENT);
        // } catch (error) {
        //     next(error);
        // }
    }
}
