import { makeUsers } from "../../enterprise_business_rules/entities";

export function buildCreateOneUser(
    usersRepo: any
) {
    return async function execute(itemInfo: any) {
        let t = await usersRepo.getNewTransaction(false);
        try {
            const sale = makeUsers(itemInfo);
            const usersCreated = await usersRepo.createItem(sale, t);
            await t.commit();
            return usersCreated;
        } catch (error) {
            throw error;
        }
    }
}
