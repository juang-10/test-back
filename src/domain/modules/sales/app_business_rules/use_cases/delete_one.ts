import { ErrorResourceNotFound } from '../../../../common/dto/errors/resource_not_found_error';

export function buildDeleteOneSale(
    salesRepo: any, 
) {

    return async function execute(id: string) {
        const searchCriter = {
            id: id
        };
        const originalData: any = await salesRepo.getItem(searchCriter);
        if (originalData === null) throw new ErrorResourceNotFound(
            "sale doesn't exist"
        );
        const deleted = await salesRepo.deleteItem(searchCriter);
        return deleted;
    }
}