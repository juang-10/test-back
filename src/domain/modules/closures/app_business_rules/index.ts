import { ClosuresRepository } from "../interface_adapters/repositories/closures_repo";
import { ClosuresPsqlRepository } from "../../../../framework_and_drivers/storage/postgres/repositories/closures/closures_psql_repo";
import { buildCreateOneClosure } from "./uses_cases/create_one";
import { buildClosuresList, buildCountList } from "./uses_cases/get_all";

const closuresRepository: ClosuresRepository = new ClosuresRepository(
    new ClosuresPsqlRepository()
)

const createOne = buildCreateOneClosure(closuresRepository);
const getList = buildClosuresList(closuresRepository);
const countList = buildCountList(closuresRepository);

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