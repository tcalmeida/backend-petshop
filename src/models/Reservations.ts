import { DataTypes } from "sequelize";
import { mySqlConection } from "../database";
import User from "./Users";
import Worker from "./Workers";
import Service from "./Services";

const dbConnection = mySqlConection.getInstance();

const Reservations = dbConnection.define(
    "Reservation",
    {
      ReservationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      IDUser: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "UserID",
        },
        allowNull: false,
      },
      IDWorker: {
        type: DataTypes.INTEGER,
        references: {
          model: Worker,
          key: "WorkerID",
        },
        allowNull: false,
      },
      IDService: {
        type: DataTypes.INTEGER,
        references: {
          model: Service,
          key: "ServiceID",
        },
        allowNull: false,
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
  
  export default Reservations;