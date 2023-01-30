import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: process.env.USERS_TABLE,
  timestamps: false,
  paranoid: false,
  underscored: false,
  freezeTableName: true,
})
class UsersDal extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
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
    allowNull: false,
    field: 'lastname',
  })
  lastname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'password',
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'email',
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'role',
  })
  role!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    field: 'created_on',
    // defaultValue: ,
  })
  created_on!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    field: 'last_login',
  })
  last_login!: string;
}

export { UsersDal };
