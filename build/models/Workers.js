"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const dbConnection = database_1.mySqlConection.getInstance();
const Worker = dbConnection.define("Worker", {
    WorkerID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    CreatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    UpdatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tableName: "Worker",
});
exports.default = Worker;
