import { ProductsRepository } from "../../../interface_adapters/repositories/products_repository";
import { ProductsPsqlRepository } from "../../../framework_and_drivers/storage/postgres/repositories/products/product_psql_repo";
import { buildCreateOneProduct } from "./create_one";
import { buildCountList, buildProductsList } from "./get_all";

const productsRepository: ProductsRepository = new ProductsRepository(
    new ProductsPsqlRepository()
)

const createOne = buildCreateOneProduct(productsRepository);
const getList = buildProductsList(productsRepository);
const countList = buildCountList(productsRepository);

const service = {
    createOne,
    getList,
    countList
}

export default service;
export {
	createOne,
    getList,
    countList
}