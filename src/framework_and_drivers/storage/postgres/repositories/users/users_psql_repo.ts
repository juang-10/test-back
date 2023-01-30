import Sequelize, { Transaction } from 'sequelize';
import { database } from '../../../../../index';
import { UsersDal } from '../../../postgres/models/users/users_dal';
import { UsersDom } from '../../../../../domain/modules/users/enterprise_business_rules/entities/users_dom';
import { keyMapper } from '../../../../../framework_and_drivers/helpers/key_mapper';
import { IWrapper } from '../../../../../domain/common/interfaces/iwrappers';
import { IFilter } from '../../../../../domain/common/interfaces/ifilter';
import {
  IRead,
  IWrite,
} from '../../../../../domain/common/interfaces/ioperations';
import { ErrorStorage } from '../../../../../domain/common/dto/errors/storage_error';

export class UsersPsqlRepository
  implements IRead, IWrite, IFilter, IWrapper<UsersDal, UsersDom>
{
  async getAllItems(opts: any, transaction?: Transaction) {
    try {
      database.addModels([UsersDal]);
      const resDal: any[] = await UsersDal.findAll({
        where: this.filterApiToDal(opts.filter),
        limit: opts.limit,
        offset: opts.offset,
        order: opts.sort,
        attributes: opts.attributes,
        transaction,
      });
      const resDom: UsersDom[] = resDal.map((res) => this.fromDalToDom(res));
      return resDom;
    } catch (error) {
      console.log(error)
      throw new Error('F');
    }
  }

  async getItem(searchCriter: any, transaction?: Transaction) {
    try {
      database.addModels([UsersDal]);
      const resDal = await UsersDal.findOne({
        where: searchCriter,
        transaction,
      });
      if (!resDal) return null;
      const resDom: UsersDom = this.fromDalToDom(resDal);
      return resDom;
    } catch (error) {
      throw error;
    }
  }

  async createItem(item: any, transaction?: Transaction) {
    try {
      database.addModels([UsersDal]);
      const user = this.fromDomToDal(item);
      const resDal: UsersDal = await user.save({
        transaction,
      });
      const resDom: UsersDom = this.fromDalToDom(resDal);
      return resDom;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateItem(id: string, item: any) {
    try {
      database.addModels([UsersDal]);
      const toUpdate = await UsersDal.findByPk(id);
      if (!toUpdate) return null;
      const resDAL = await toUpdate.update(keyMapper.fromCamelToSnake(item));
      const resDOM = this.fromDalToDom(resDAL);
      return resDOM;
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(deleteCriter: any, transaction?: Transaction) {
    try {
      database.addModels([UsersDal]);
      const toDelete = await UsersDal.findOne({
        where: deleteCriter,
        transaction,
      });
      if (!toDelete) return null;
      const resDAL = await toDelete.destroy({ transaction });
      return resDAL;
    } catch (error) {
      throw error;
    }
  }

  async countItems(filter: any) {
    try {
      database.addModels([UsersDal]);
      const count: number = await UsersDal.count({
        where: this.filterApiToDal(filter),
      });
      return count;
    } catch (error) {
      throw new Error('F');
    }
  }

  async getNewTransaction(
    autocommit: boolean,
    parentTransaction?: Transaction
  ) {
    try {
      const transaction: Transaction = await database.transaction({
        autocommit,
        transaction: parentTransaction,
      });
      return transaction;
    } catch (error) {
      throw error;
    }
  }

  fromDomToDal(item: UsersDom): UsersDal {
    const itemDal: any = keyMapper.fromCamelToSnake(item);
    const resDal: UsersDal = new UsersDal(itemDal);
    return resDal;
  }

  fromDalToDom(item: UsersDal): UsersDom {
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

  filterApiToDal(filter: any) {
    const mapFilter: any = {};
    for (const key in filter) {
      switch (key) {
        case 'name':
          mapFilter[key] = {
            [Sequelize.Op.iLike]: `%${filter[key]}%`,
          };
          break;
        default:
          break;
      }
    }
    return mapFilter;
  }
}
