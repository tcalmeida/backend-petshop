"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
require("dotenv/config");
const APP_PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
database_1.mySqlConection.hasConection();
app.listen(APP_PORT || 5000, () => {
    console.log(`Listening on Port: ${APP_PORT}`);
});
exports.default = app;
