// models/user.ts
import { Model, DataTypes } from 'sequelize';
import { sequelize } from 'src/config/db';

export class User extends Model {
  public id?: number;
  public username?: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize, // передаем экземпляр sequelize
  }
);
