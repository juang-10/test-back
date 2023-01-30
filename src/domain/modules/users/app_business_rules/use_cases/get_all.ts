function buildSalesList(salesRepo: any) {

	return async function execute(filter: any, limit: number, offset: number, sort?: any) {
		const opts = {
			filter,
			limit,
			offset,
			sort,
		};
		const salesList: any[] = await salesRepo.getAllItems(opts);
		return salesList;
	}
}

function buildCountList(salesRepo: any) {

	return async function execute(filter: any) {
		const countItems: number = await salesRepo.countItems(filter);
		return countItems;
	}
}

const service = {
	buildSalesList,
	buildCountList,
}
export default service;
export {
	buildSalesList,
	buildCountList,
}
