"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./src/routes"));
const connection_1 = __importDefault(require("./src/connection/connection"));
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3006;
app.use(morgan("dev"));
app.use(express.json());
app.use(routes_1.default);
(0, connection_1.default)();
app.listen(port, () => {
    console.log(`App usando el puerto ${port}`);
});
