import { ErrorResourceNotFound } from '../../../../common/dto/errors/resource_not_found_error';
import { makeSales } from '../../../../modules/sales/enterprise_business_rules/entities/index';

export function buildUpdateSales(
    salesRepo: any,
) {

    return async function execute(id: string, itemInfo: any) {
        const searchCriter = {
            id: id
        };
        const originalItem: any = await salesRepo.getItem(searchCriter);
        if (originalItem === null) throw new ErrorResourceNotFound(
            "sales doesn't exist"
        );
        originalItem.updateInfo(itemInfo);
        const itemUpdated = makeSales(originalItem);
        const updatedServiceType = await salesRepo.updateItem(id, itemUpdated);
        return updatedServiceType;
    }
}
