import { UsersPsqlRepository } from "../../../../framework_and_drivers/storage/postgres/repositories/users/users_psql_repo";
import { UsersRepository } from "../interface_adapters/repositories/users_repo";
import { buildCreateOneUser,  } from "./use_cases/create_one";
import { buildUsersList, buildCountList } from "./use_cases/get_all";
import { buildDeleteOneUsers } from "./use_cases/delete_one";
import { buildUpdateUsers } from "./use_cases/update_one";
const usersRepository: UsersRepository = new UsersRepository(
  new UsersPsqlRepository()
)

const createOne = buildCreateOneUser(usersRepository);
const getList = buildUsersList(usersRepository);
const countList = buildCountList(usersRepository);
const deleteOne = buildDeleteOneUsers(usersRepository);
const updateOne = buildUpdateUsers(usersRepository);

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