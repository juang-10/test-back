import { makeProduct } from "../../../domain/entities/product";

export function buildCreateOneProduct (
    productsRepo: any
) {
    return async function execute(itemInfo: any) {
        let t = await productsRepo.getNewTransaction(false);
        try {
            const product = makeProduct(itemInfo);
            const productCreated = await productsRepo.createItem(product, t);
            return productCreated;
        } catch (error) {
            throw error;
        }
    }
}
