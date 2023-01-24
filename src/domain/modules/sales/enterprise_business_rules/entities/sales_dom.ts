export class SalesDom {
    id: number;
	productId: number;
    quantity: number;
    price: number;
	userId: number;
    createdAt: string;
    updatedAt: string;
    
    constructor(
        id: number, product_id: number, quantity: number, price: number, user_id: number,
        created_at: string, updated_at: string
    ) {
        this.id = id;
        this.productId = product_id;
        this.quantity = quantity;
        this.price = price
        this.userId = user_id;
        this.createdAt = created_at;
        this.updatedAt = updated_at;
    }
}

export function buildMakeSales() {
    return function execute(item: any) {
        const sale = new SalesDom(
            item.id,
            item.productId,
            item.quantity,
            item.price,
            item.userId,
            item.createdAt,
            item.updatedAt
        );
        return Object.freeze(sale);
    };
}
