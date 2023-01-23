import { ProductDom } from "./../../../domain/entities/product/product_dom";
import { ProductsApi } from '../../../domain/dto/api_models/products/products_api';
import { IMapperAPI } from "../bases/imapperapi";

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
