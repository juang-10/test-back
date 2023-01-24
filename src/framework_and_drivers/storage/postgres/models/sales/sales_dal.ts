import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: process.env.SALES_TABLE,
    timestamps: false,
    paranoid: false,
    underscored: false,
    freezeTableName: true,
})
    class SalesDal extends Model {
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;
        
    @Column({
        type: DataType.BIGINT,
        field: 'product_id',
        allowNull: false,
        
    })
    product_id!: number;

    @Column({
        type: DataType.NUMBER,
        field: 'quantity',
        allowNull: false,
    })
    quantity!: number;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'price',
    })
    price!: number;

    @Column({
        type: DataType.BIGINT,
        field: 'user_id',
        allowNull: false,
        
    })
    user_id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'created_at',
        // defaultValue: ,
    })
    created_at!: string;
    
    @Column({
        type: DataType.DATE,
        allowNull: true,
        field: 'updated_at',
    })
    updated_at!: string;
}

export { SalesDal };
