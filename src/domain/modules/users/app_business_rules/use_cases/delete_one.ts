import { ErrorResourceNotFound } from '../../../../common/dto/errors/resource_not_found_error';

export function buildDeleteOneUsers(usersRepo: any) {
  return async function execute(id: string) {
    const searchCriter = {
      id: id,
    };
    const originalData: any = await usersRepo.getItem(searchCriter);
    if (originalData === null)
      throw new ErrorResourceNotFound("sale doesn't exist");
    const deleted = await usersRepo.deleteItem(searchCriter);
    return deleted;
  };
}
