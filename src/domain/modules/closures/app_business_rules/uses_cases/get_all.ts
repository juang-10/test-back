function buildClosuresList(closuresRepo: any) {

	return async function execute(filter: any, limit: number, offset: number, sort?: any) {
		const opts = {
			filter,
			limit,
			offset,
			sort,
		};
		const closuresList: any[] = await closuresRepo.getAllItems(opts);
		return closuresList;
	}
}

function buildCountList(closuresRepo: any) {

	return async function execute(filter: any) {
		const countItems: number = await closuresRepo.countItems(filter);
		return countItems;
	}
}

const service = {
	buildClosuresList,
	buildCountList,
}
export default service;
export {
	buildClosuresList,
	buildCountList,
}
