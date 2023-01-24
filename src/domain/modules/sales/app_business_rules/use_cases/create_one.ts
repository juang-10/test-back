import { makeSales } from "../../enterprise_business_rules/entities";

export function buildCreateOneSale(
    salesRepo: any
) {
    return async function execute(itemInfo: any) {
        let t = await salesRepo.getNewTransaction(false);
        try {
            const sale = makeSales(itemInfo);
            const salesCreated = await salesRepo.createItem(sale, t);
            await t.commit();
            return salesCreated;
        } catch (error) {
            throw error;
        }
    }
}
