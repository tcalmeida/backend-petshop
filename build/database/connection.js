"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Connection {
    constructor(dbName, dbUser, dbPass, dbConfig) {
        try {
            this.db_name = dbName;
            this.db_user = dbUser;
            this.db_pass = dbPass;
            this.db_config = dbConfig;
            this.instance = new sequelize_1.Sequelize(dbName, dbUser, dbPass, dbConfig); // constructor que cria uma nova conexao com o BD
            console.log(`Database: ${this.db_name} connected`);
        }
        catch (err) {
            console.error("Database connection error");
            throw err;
        }
    }
    getInstance() {
        return this.instance;
    }
    hasConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.instance.authenticate();
                console.log(`Database: ${this.db_name} connected`);
            }
            catch (error) {
                console.error("Database connection error");
            }
        });
    }
}
exports.default = Connection;
