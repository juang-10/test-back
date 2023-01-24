import Sequelize, { Transaction } from 'sequelize';
import { database } from '../../../../../index';
import { SalesDal } from '../../../postgres/models/sales/sales_dal';
import { SalesDom } from '../../../../../domain/modules/sales/enterprise_business_rules/entities/sales_dom';
import { keyMapper } from '../../../../../framework_and_drivers/helpers/key_mapper';
import { IWrapper } from '../../../../../domain/common/interfaces/iwrappers';
import { IFilter } from '../../../../../domain/common/interfaces/ifilter';
import { IRead, IWrite } from '../../../../../domain/common/interfaces/ioperations';

export class SalesPsqlRepository
implements IRead, IWrite, IFilter, IWrapper<SalesDal, SalesDom>
{
    async getAllItems(opts: any, transaction?: Transaction) {
        try {
            database.addModels([SalesDal]);
            const resDal: any[] = await SalesDal.findAll({
                where: this.filterApiToDal(opts.filter),
                limit: opts.limit,
                offset: opts.offset,
                order: opts.sort,
                attributes: opts.attributes,
                transaction,
            });
            const resDom: SalesDom[] = resDal.map((res) => this.fromDalToDom(res));
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
            database.addModels([SalesDal]);
            const sales = this.fromDomToDal(item);
            const resDal: SalesDal = await sales.save({
                transaction,
            });
            const resDom: SalesDom = this.fromDalToDom(resDal);
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
        database.addModels([SalesDal]);
        const count: number = await SalesDal.count({
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

    fromDomToDal(item: SalesDom): SalesDal {
        const itemDal: any = keyMapper.fromCamelToSnake(item);
        const resDal: SalesDal = new SalesDal(itemDal);
        return resDal;
    }

    fromDalToDom(item: SalesDal): SalesDom {
        const resDom: SalesDom = new SalesDom(
            item.id,
            item.product_id,
            item.quantity,
            item.price,
            item.user_id,
            item.created_at,
            item.updated_at
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
