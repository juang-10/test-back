import { UsersPsqlRepository } from "../../../../framework_and_drivers/storage/postgres/repositories/users/users_psql_repo";
import { UsersRepository } from "../interface_adapters/repositories/users_repo";
import { buildCreateOneUser,  } from "./use_cases/create_one";
import { buildSalesList,buildCountList } from "./use_cases/get_all";
const usersRepository: UsersRepository = new UsersRepository(
  new UsersPsqlRepository()
)

const createOne = buildCreateOneUser(usersRepository);
const getList = buildSalesList(usersRepository);
const countList = buildCountList(usersRepository);
// const deleteOne = buildDeleteOneSale(salesRepository);
// const updateOne = buildUpdateSales(salesRepository);

const service = {
  createOne,
  getList,
  countList,
  // deleteOne,
  // updateOne
}

export default service;
export {
  createOne,
  getList,
  // countList,
  // deleteOne,
  // updateOne
}