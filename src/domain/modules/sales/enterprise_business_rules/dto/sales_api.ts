export class salesApi {

	id: number;
	product_id: number;
    quantity: number;
    price: number;
	user_id: number;
    created_at: string;
    updated_at: string;

	constructor(
        id: number, product_id: number, quantity: number, price: number, user_id: number,
        created_at: string, updated_at: string
    ) {
		this.id = id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.price = price
        this.user_id = product_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
