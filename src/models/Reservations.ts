import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";
import User from "./Users";
import Worker from "./Workers";
import Service from "./Services";

const dbConnection = mySqlConection.getInstance();

const Reservation = dbConnection.define(
    "Reservation",
    {
      ReservationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      User_UserID: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "UserID",
        },
      },
      Worker_WorkerID: {
        type: DataTypes.INTEGER,
        references: {
          model: Worker,
          key: "WorkerID",
        },
      },
      Service_ServiceID: {
        type: DataTypes.INTEGER,
        references: {
          model: Service,
          key: "ServiceID",
        },
      },
      CreatedAt: {
        type: DataTypes.DATE,
      },
      UpdatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Reservation",
    }
  );
  
  export default Reservation;