function buildProductsList(productsRepo: any) {

	return async function execute(filter: any, limit: number, offset: number, sort?: any) {
		const opts = {
			filter,
			limit,
			offset,
			sort,
		};
		const productsList: any[] = await productsRepo.getAllItems(opts);
		return productsList;
	}
}

function buildCountList(productsRepo: any) {

	return async function execute(filter: any) {
		const countItems: number = await productsRepo.countItems(filter);
		return countItems;
	}
}

const service = {
	buildProductsList,
	buildCountList,
}
export default service;
export {
	buildProductsList,
	buildCountList,
}
