import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

const Users = dbConnection.define(
  "User",
  {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telephone: {
      type: DataTypes.STRING,
    },
    CreatedAt: {
      type: DataTypes.DATE,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "User",
  }
);

export default Users;
