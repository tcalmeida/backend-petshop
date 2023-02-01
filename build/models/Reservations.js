"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const Users_1 = __importDefault(require("./Users"));
const Workers_1 = __importDefault(require("./Workers"));
const Services_1 = __importDefault(require("./Services"));
const dbConnection = database_1.mySqlConection.getInstance();
const Reservations = dbConnection.define("Reservation", {
    ReservationID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    IDUser: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Users_1.default,
            key: "UserID",
        },
        allowNull: false,
    },
    IDWorker: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Workers_1.default,
            key: "WorkerID",
        },
        allowNull: false,
    },
    IDService: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Services_1.default,
            key: "ServiceID",
        },
        allowNull: false,
    },
    CreatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    UpdatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tableName: "Reservation",
});
exports.default = Reservations;
