import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

const Service = dbConnection.define(
  "Service",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "services",
    timestamps: false,
  }
);

export default Service;
