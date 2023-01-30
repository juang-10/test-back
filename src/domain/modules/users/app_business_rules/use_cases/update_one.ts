import { ErrorResourceNotFound } from '../../../../common/dto/errors/resource_not_found_error';
import { makeUsers} from '../../../../modules/users/enterprise_business_rules/entities/index';

export function buildUpdateUsers(usersRepo: any) {
  return async function execute(id: string, itemInfo: any) {
    const searchCriter = {
      id: id,
    };
    const originalItem: any = await usersRepo.getItem(searchCriter);
    if (originalItem === null)
      throw new ErrorResourceNotFound("users doesn't exist");
    originalItem.updateInfo(itemInfo);
    const itemUpdated = makeUsers(originalItem);
    const updatedServiceType = await usersRepo.updateItem(id, itemUpdated);
    return updatedServiceType;
  };
}
