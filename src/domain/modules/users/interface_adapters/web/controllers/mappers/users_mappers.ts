import { UsersDom } from '../../../../enterprise_business_rules/entities/users_dom';
import { UsersApi } from '../../../../../users/enterprise_business_rules/dto/users_api';
import { IMapperAPI } from '../../../../../../../domain/common/bases/imapperapi';

class UsersMapper implements IMapperAPI<UsersApi, UsersDom> {
  fromApiToDom(item: UsersApi, opts?: any) {
    const resDom: UsersDom = new UsersDom(
      item.id,
      item.name,
      item.lastname,
      item.password,
      item.email,
      item.role,
      item.created_on,
      item.last_login
    );
    return resDom;
  }

  fromDomToApi(item: UsersDom, opts?: any) {
    const resApi: UsersApi = new UsersApi(
      item.id,
      item.name,
      item.lastname,
      item.password,
      item.email,
      item.role,
      item.created_on,
      item.last_login
    );
    return resApi;
  }
}

const usersMapper = new UsersMapper();

export { usersMapper };
