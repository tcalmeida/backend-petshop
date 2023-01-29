"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.listen(port, () => {
    console.log("Server running on port: 3000");
    database_1.mySqlConection.hasConection();
});
exports.default = app;
