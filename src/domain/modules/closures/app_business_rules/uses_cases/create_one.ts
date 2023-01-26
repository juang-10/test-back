import { makeClosures } from "../../enterprise_business_rules/entities";

export function buildCreateOneClosure (
    closuresRepo: any
) {
    return async function execute(itemInfo: any) {
        let t = await closuresRepo.getNewTransaction(false);
        try {
            const closures = makeClosures(itemInfo);
            const closuresCreated = await closuresRepo.createItem(closures, t);
            await t.commit();
            return closuresCreated;
        } catch (error) {
            throw error;
        }
    }
}
