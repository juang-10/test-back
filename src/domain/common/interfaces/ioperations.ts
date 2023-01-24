export interface IRead{
	getAllItems(opts : any): any;
	getItem(search: any): any;
	countItems(filter: any): any;
}

export interface IWrite {
	createItem(item: any): any;
	updateItem(id: string, item: any): any;
	deleteItem(search: any): any;
}
