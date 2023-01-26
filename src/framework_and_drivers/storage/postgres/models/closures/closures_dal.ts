import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: process.env.CLOSURES_TABLE,
    timestamps: false,
    paranoid: false,
    underscored: false,
    freezeTableName: true,
})
    class ClosuresDal extends Model {
    @Column({
        type: DataType.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;


    @Column({
        type: DataType.DATE,
        allowNull: false,
        field: 'start_date',
    })
    start_date!: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
        field: 'end_date',
    })
    end_date!: string;

    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        field: 'total',
    })
    total!: number;

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
    
}

export { ClosuresDal };
