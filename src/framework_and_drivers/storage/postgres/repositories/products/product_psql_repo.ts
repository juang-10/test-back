import Sequelize, { Transaction } from 'sequelize';
import { database } from '../../../../../index';
import { ProductsDal } from '../../models/product_dal';
import { ProductDom } from '../../../../../domain/entities/product/product_dom';
import { keyMapper } from '../../../../../framework_and_drivers/helpers/key_mapper';
import { IWrapper } from '../../../../../domain/interfaces/iwrappers';
import { IFilter } from '../../../../../domain/interfaces/ifilter';
import { IRead, IWrite } from '../../../../../domain/interfaces/ioperations';

export class ProductsPsqlRepository 
implements IRead, IWrite, IFilter, IWrapper<ProductsDal, ProductDom> {

	async getAllItems(opts: any) {
    throw new Error("Method not implemented");
  }

  getItem(search: any) {
    throw new Error("Method not implemented");
  }

	async createItem(item: any, transaction?: Transaction) {
    try {
      database.addModels([ProductsDal]);
      const productsSpot = this.fromDomToDal(item);
      const resDal: ProductsDal = await productsSpot.save({ 
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
        throw new Error("Method not implemented");
    }

    deleteItem(search: any) {
        throw new Error("Method not implemented");
    }

    countItems(filter: any) {
        throw new Error("Method not implemented");
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

    filterApiToDal(item: any) {
        throw new Error("Method not implemented");
    }
}
