import { ProductsRepository } from "../../../interface_adapters/repositories/products_repository";
import { ProductsPsqlRepository } from "../../../framework_and_drivers/storage/postgres/repositories/products/product_psql_repo";
import { buildCreateOneProduct } from "./create_one";

const productsRepository: ProductsRepository = new ProductsRepository(
    new ProductsPsqlRepository()
)

const createOne = buildCreateOneProduct(productsRepository);

const service = {
    createOne,
}

export default service;
export {
	createOne,
}