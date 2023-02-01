"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const dbConnection = database_1.mySqlConection.getInstance();
const Users = dbConnection.define("User", {
    UserID: {
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
    Telephone: {
        type: sequelize_1.DataTypes.STRING,
    },
    CreatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    UpdatedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tableName: "User",
});
exports.default = Users;
