"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlConection = void 0;
const connection_1 = __importDefault(require("./connection"));
const authDB_1 = require("../infra/config/authDB");
const mySqlConection = new connection_1.default(authDB_1.authDB.database, authDB_1.authDB.username, authDB_1.authDB.password, {
    dialect: authDB_1.authDB.dialect,
    port: authDB_1.authDB.port,
    host: authDB_1.authDB.host,
});
exports.mySqlConection = mySqlConection;
