import { IRead, IWrite } from "../../../../../domain/common/interfaces/ioperations";


export class SalesRepository implements IRead, IWrite {

    repository: any;

    constructor(repository: any) {
        this.repository = repository;
    }

    async getAllItems(opts: any, transaction?: any) {
        return await this.repository.getAllItems(opts, transaction);
    }

    async getItem(searchCriter: any, transaction?: any) {
        return await this.repository.getItem(searchCriter, transaction);
    }

    async createItem(item: any, transaction?: any) {
        return await this.repository.createItem(item, transaction);
    }

    async updateItem(id: string, item: any, transaction?: any) {
        return await this.repository.updateItem(id, item, transaction);
    }

    async deleteItem(deleteCriter: any, transaction?: any) {
        return await this.repository.deleteItem(deleteCriter, transaction);
    }

    async countItems(filter: any, transaction?: any) {
        return await this.repository.countItems(filter, transaction);
    }

    async getNewTransaction(autocommit: boolean, parentTransaction?: any) {
        return await this.repository.getNewTransaction(autocommit, parentTransaction);
    }
}
