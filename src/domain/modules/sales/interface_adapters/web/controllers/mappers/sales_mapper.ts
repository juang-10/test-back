import { SalesDom } from "../../../../../sales/enterprise_business_rules/entities/sales_dom"
import { salesApi } from '../../../../../sales/enterprise_business_rules/dto/sales_api';
import { IMapperAPI } from "../../../../../../../domain/common/bases/imapperapi";

class SalesMapper implements IMapperAPI<salesApi, SalesDom> {
	
    fromApiToDom(item: salesApi, opts?: any) {
        const resDom: SalesDom = new SalesDom(
            item.id,
            item.product_id,
            item.quantity,
            item.price,
            item.user_id,
            item.created_at,
            item.updated_at
        );
        return resDom;
    }

    fromDomToApi(item: SalesDom, opts?: any) {
        const resApi: salesApi = new salesApi(
            item.id,
            item.productId,
            item.quantity,
            item.price,
            item.userId,
            item.createdAt,
            item.updatedAt
        );
        return resApi;
    }
}

const salesMapper = new SalesMapper();

export { salesMapper };
