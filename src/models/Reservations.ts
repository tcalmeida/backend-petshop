import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";
import User from "./Users";
import Worker from "./Workers";
import Service from "./Services";

const dbConnection = mySqlConection.getInstance();

const Reservation = dbConnection.define(
    "Reservation",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      worker_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Worker,
          key: "id",
        },
      },
      service_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Service,
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "reservations",
    }
  );
  
  export default Reservation;