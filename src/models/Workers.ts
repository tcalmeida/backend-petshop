import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";

const dbConnection = mySqlConection.getInstance();

const Worker = dbConnection.define(
    "Workers",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "workers",
    }
  );
  
  export default Worker;