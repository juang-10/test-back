import Sequelize, { Transaction } from 'sequelize';
import { database } from '../../../../../index';
import { ProductsDal } from '../../models/product_dal';
import { ProductDom } from '../../../../../domain/entities/product/product_dom';
import { keyMapper } from '../../../../../framework_and_drivers/helpers/key_mapper';
import { IWrapper } from '../../../../../domain/interfaces/iwrappers';
import { IFilter } from '../../../../../domain/interfaces/ifilter';
import { IRead, IWrite } from '../../../../../domain/interfaces/ioperations';

export class ProductsPsqlRepository
  implements IRead, IWrite, IFilter, IWrapper<ProductsDal, ProductDom>
{
  async getAllItems(opts: any, transaction?: Transaction) {
    try {
      database.addModels([ProductsDal]);
      const resDal: any[] = await ProductsDal.findAll({
        where: this.filterApiToDal(opts.filter),
        limit: opts.limit,
        offset: opts.offset,
        order: opts.sort,
        attributes: opts.attributes,
        transaction,
      });
      const resDom: ProductDom[] = resDal.map((res) => this.fromDalToDom(res));
      return resDom;
    } catch (error) {
      throw new Error("F");
      
    }
  }

  getItem(search: any) {
    throw new Error('Method not implemented');
  }

  async createItem(item: any, transaction?: Transaction) {
    try {
      database.addModels([ProductsDal]);
      const product = this.fromDomToDal(item);
      const resDal: ProductsDal = await product.save({
        transaction,
      });
      const resDom: ProductDom = this.fromDalToDom(resDal);
      return resDom;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  updateItem(id: string, item: any) {
    throw new Error('Method not implemented');
  }

  deleteItem(search: any) {
    throw new Error('Method not implemented');
  }

  async countItems(filter: any) {
    try {
      database.addModels([ProductsDal]);
      const count: number = await ProductsDal.count({
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

  fromDomToDal(item: ProductDom): ProductsDal {
    const itemDal: any = keyMapper.fromCamelToSnake(item);
    const resDal: ProductsDal = new ProductsDal(itemDal);
    return resDal;
  }

  fromDalToDom(item: ProductsDal): ProductDom {
    const resDom: ProductDom = new ProductDom(
      item.id,
      item.name,
      item.description,
      item.price
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
