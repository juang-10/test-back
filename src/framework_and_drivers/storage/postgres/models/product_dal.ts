import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: process.env.PRODUCTS_TABLE,
    timestamps: false,
    paranoid: false,
    underscored: false,
    freezeTableName: true,
})
    class ProductsDal extends Model {
    @Column({
        type: DataType.BIGINT,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'name',
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        field: 'description',
    })
    description!: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        field: 'price',
    })
    price!: number;
}

export { ProductsDal };
