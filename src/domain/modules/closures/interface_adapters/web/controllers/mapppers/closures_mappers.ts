import { ClosuresDom } from "../../../../enterprise_business_rules/entities/closures_dom";
import { ClosuresApi } from '../../../../enterprise_business_rules/dto/closures_api';
import { IMapperAPI } from "../../../../../../common/bases/imapperapi";

class ClosuresMapper implements IMapperAPI<ClosuresApi, ClosuresDom> {
	
    fromApiToDom(item: ClosuresApi, opts?: any) {
        const resDom: ClosuresDom = new ClosuresDom(
            item.id,
            item.start_date,
            item.end_date,
            item.total,
            item.user_id,
            item.created_at
        );
        return resDom;
    }

    fromDomToApi(item: ClosuresDom, opts?: any) {
        const resApi: ClosuresApi = new ClosuresApi(
            item.id,
            item.start_date,
            item.end_date,
            item.total,
            item.user_id,
            item.created_at
        );
        return resApi;
    }
}

const closuresMapper = new ClosuresMapper();

export { closuresMapper };
