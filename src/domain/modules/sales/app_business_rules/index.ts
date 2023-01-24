import { SalesRepository } from "../../sales/interface_adapters/repositories/sales_repo";
import { SalesPsqlRepository } from '../../../../framework_and_drivers/storage/postgres/repositories/sales/sales_psql_repo'
import { buildCreateOneSale } from "./use_cases/create_one";
import { buildCountList, buildSalesList } from './use_cases/get_all'

const salesRepository: SalesRepository = new SalesRepository(
    new SalesPsqlRepository()
)

const createOne = buildCreateOneSale(salesRepository);
const getList = buildSalesList(salesRepository);
const countList = buildCountList(salesRepository);

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