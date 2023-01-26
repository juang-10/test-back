import { ClosuresRepository } from '../interface_adapters/repositories/closures_repo';
import { ClosuresPsqlRepository } from '../../../../framework_and_drivers/storage/postgres/repositories/closures/closures_psql_repo';
import { buildCreateOneClosure } from './uses_cases/create_one';
import { buildClosuresList, buildCountList } from './uses_cases/get_all';

const closuresRepository: ClosuresRepository = new ClosuresRepository(
  new ClosuresPsqlRepository()
);

const getList = buildClosuresList(closuresRepository);
const createOne = buildCreateOneClosure(closuresRepository);
const countList = buildCountList(closuresRepository);

const service = {
  getList,
  createOne,
  countList,
};

export default service;
export { getList, createOne, countList };
