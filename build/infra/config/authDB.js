"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authDB = void 0;
require("dotenv/config");
exports.authDB = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT,
};
//module.exports = authDB;
