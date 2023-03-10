"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const dbConnection = database_1.mySqlConection.getInstance();
const Services = dbConnection.define("Service", {
    ServiceID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
    },
    Price: {
        type: sequelize_1.DataTypes.FLOAT,
    },
}, {
    tableName: "Service",
    timestamps: false,
});
exports.default = Services;
