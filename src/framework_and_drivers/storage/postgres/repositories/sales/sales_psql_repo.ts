import Sequelize, { Transaction } from 'sequelize';
import { database } from '../../../../../index';
import { SalesDal } from '../../../postgres/models/sales/sales_dal';
import { SalesDom } from '../../../../../domain/modules/sales/enterprise_business_rules/entities/sales_dom';
import { keyMapper } from '../../../../../framework_and_drivers/helpers/key_mapper';
import { IWrapper } from '../../../../../domain/common/interfaces/iwrappers';
import { IFilter } from '../../../../../domain/common/interfaces/ifilter';
import { IRead, IWrite } from '../../../../../domain/common/interfaces/ioperations';
import { ErrorStorage } from '../../../../../domain/common/dto/errors/storage_error';

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

    async getItem(searchCriter: any, transaction?: Transaction) {
        try {
            database.addModels([SalesDal]);
            const resDal = await SalesDal.findOne({
                where: searchCriter,
                transaction,
            });
            if (!resDal) return null;
            const resDom: SalesDom = this.fromDalToDom(resDal);
            return resDom;
        } catch (error) {
            throw error
        }
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

    async updateItem(id: string, item: any) {
        try {
            database.addModels([SalesDal]);
            const toUpdate = await SalesDal.findByPk(id);
            if (!toUpdate) return null;
            const resDAL = await toUpdate.update(keyMapper.fromCamelToSnake(item));
            const resDOM = this.fromDalToDom(resDAL);
            return resDOM;
        } catch (error) {
            throw error
        }
    }

    async deleteItem(deleteCriter: any, transaction?: Transaction) {
        try {
            database.addModels([SalesDal]);
            const toDelete = await SalesDal.findOne({
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
