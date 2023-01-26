import Sequelize, { Transaction } from 'sequelize';
import { database } from '../../../../../index';
import { ClosuresDal } from '../../models/closures/closures_dal';
import { ClosuresDom } from '../../../../../domain/modules/closures/enterprise_business_rules/entities/closures_dom';
import { keyMapper } from '../../../../helpers/key_mapper';
import { IWrapper } from '../../../../../domain/common/interfaces/iwrappers';
import { IFilter } from '../../../../../domain/common/interfaces/ifilter';
import { IRead, IWrite } from '../../../../../domain/common/interfaces/ioperations';

export class ClosuresPsqlRepository
  implements IRead, IWrite, IFilter, IWrapper<ClosuresDal, ClosuresDom>
{
  async getAllItems(opts: any, transaction?: Transaction) {
    try {
      database.addModels([ClosuresDal]);
      const resDal: any[] = await ClosuresDal.findAll({
        where: this.filterApiToDal(opts.filter),
        limit: opts.limit,
        offset: opts.offset,
        order: opts.sort,
        attributes: opts.attributes,
        transaction,
      });
      const resDom: ClosuresDom[] = resDal.map((res) => this.fromDalToDom(res));
      return resDom;
    } catch (error) {
      throw new Error("F");
      
    }
  }

  getItem(search: any) {
    throw new Error('Method not implemented');
  }

  updateItem(id: string, item: any) {
    throw new Error('Method not implemented');
  }

  deleteItem(search: any) {
    throw new Error('Method not implemented');
  }

  async createItem(item: any, transaction?: Transaction) {
    try {
      database.addModels([ClosuresDal]);
      const closures = this.fromDomToDal(item);
      const resDal: ClosuresDal = await closures.save({
        transaction,
      });
      const resDom: ClosuresDom = this.fromDalToDom(resDal);
      return resDom;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  async countItems(filter: any) {
    try {
      database.addModels([ClosuresDal]);
      const count: number = await ClosuresDal.count({
        where: this.filterApiToDal(filter),
      });
      return count;
    } catch (error) {
      throw new Error("F");
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

  fromDomToDal(item: ClosuresDom): ClosuresDal {
    const itemDal: any = keyMapper.fromCamelToSnake(item);
    const resDal: ClosuresDal = new ClosuresDal(itemDal);
    return resDal;
  }

  fromDalToDom(item: ClosuresDal): ClosuresDom {
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
