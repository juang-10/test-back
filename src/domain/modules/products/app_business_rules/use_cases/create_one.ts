import { makeProduct } from "../../enterprise_business_rules/entities";

export function buildCreateOneProduct (
    productsRepo: any
) {
    return async function execute(itemInfo: any) {
        let t = await productsRepo.getNewTransaction(false);
        try {
            const product = makeProduct(itemInfo);
            const productCreated = await productsRepo.createItem(product, t);
            await t.commit();
            return productCreated;
        } catch (error) {
            throw error;
        }
    }
}
