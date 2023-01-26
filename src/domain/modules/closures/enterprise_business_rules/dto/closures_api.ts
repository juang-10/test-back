export class ClosuresApi {

	id: number;
    start_date: string;
    end_date: string;
    total: number;
    user_id: number;
    created_at: string;

	constructor(
        id: number,
        start_date: string,
        end_date: string,
        total: number,
        user_id: number,
        created_at: string
    ) {
        this.id = id
        this.start_date = start_date
        this.end_date = end_date
        this.total = total
        this.user_id = user_id
        this.created_at = created_at
    }
}
