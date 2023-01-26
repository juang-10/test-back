export class ClosuresDom {
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

export function buildMakeClosures() {
    return function execute(item: any) {
    const closures = new ClosuresDom(
        item.id,
        item.start_date,
        item.end_date,
        item.total,
        item.user_id,
        item.created_at
    );
    return Object.freeze(closures);
    };
}
