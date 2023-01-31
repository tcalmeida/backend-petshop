import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

const Service = dbConnection.define(
  "Service",
  {
    ServiceID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    tableName: "Service",
    timestamps: false,
  }
);

export default Service;
