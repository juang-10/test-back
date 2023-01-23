class KeyMapper {

	fromCamelToSnake(item: any) {
		const mapItem: any = { ...item };
		for (let key in mapItem) {
			const newKey = this.camelToSnake(key);
			mapItem[newKey] = mapItem[key];
			if (key !== newKey) delete mapItem[key];
		}
		return mapItem;
	}

	fromSnakeToCamel(item: any) {
		const mapItem: any = { ...item };
		for (let key in mapItem) {
			const newKey = this.snakeToCamel(key);
			mapItem[newKey] = mapItem[key];
			if (key !== newKey) delete mapItem[key];
		}
		return mapItem;
	}

	private snakeToCamel(string: any) {
		return string.replace(/([-_][a-z])/g, (group: any) => group.toUpperCase()
			.replace('-', '')
			.replace('_', '')
		);
	}

	private camelToSnake(string: any) {
		return string.replace(/[\w]([A-Z])/g, (keyName: any) => {
			return keyName[0] + "_" + keyName[1];
		}).toLowerCase();
	}
}

const keyMapper = new KeyMapper();

export { keyMapper };
