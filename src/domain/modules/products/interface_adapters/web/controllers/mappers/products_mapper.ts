import { ProductDom } from "../../../../enterprise_business_rules/entities/product_dom";
import { ProductsApi } from '../../../../enterprise_business_rules/dto/products_api';
import { IMapperAPI } from "../../../../../../common/bases/imapperapi";

class ProductsMapper implements IMapperAPI<ProductsApi, ProductDom> {
	
    fromApiToDom(item: ProductsApi, opts?: any) {
        const resDom: ProductDom = new ProductDom(
            item.id,
            item.name,
            item.description,
            item.price
        );
        return resDom;
    }

    fromDomToApi(item: ProductDom, opts?: any) {
        const resApi: ProductsApi = new ProductsApi(
            item.id,
            item.name,
            item.description,
            item.price
        );
        return resApi;
    }
}

const productsMapper = new ProductsMapper();

export { productsMapper };
