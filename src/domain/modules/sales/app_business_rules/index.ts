import { SalesRepository } from "../../sales/interface_adapters/repositories/sales_repo";
import { SalesPsqlRepository } from '../../../../framework_and_drivers/storage/postgres/repositories/sales/sales_psql_repo'
import { buildCreateOneSale } from "./use_cases/create_one";
import { buildCountList, buildSalesList } from './use_cases/get_all'
import { buildDeleteOneSale } from "./use_cases/delete_one";
import { buildUpdateSales } from "./use_cases/update_one";

const salesRepository: SalesRepository = new SalesRepository(
    new SalesPsqlRepository()
)

const createOne = buildCreateOneSale(salesRepository);
const getList = buildSalesList(salesRepository);
const countList = buildCountList(salesRepository);
const deleteOne = buildDeleteOneSale(salesRepository);
const updateOne = buildUpdateSales(salesRepository);

const service = {
    createOne,
    getList,
    countList,
    deleteOne,
    updateOne
}

export default service;
export {
	createOne,
    getList,
    countList,
    deleteOne,
    updateOne
}