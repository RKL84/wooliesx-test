"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./loaders/logger"));
process.on("uncaughtException", (ex) => {
    logger_1.default.error(ex.message, ex);
});
process.on("unhandledRejection", (ex) => {
    throw ex;
});
async function startServer() {
    const app = express_1.default();
    await require('./loaders').default({ expressApp: app });
    app.listen(config_1.default.port, () => {
        logger_1.default.info(`${process.env.NODE_ENV || "dev"} server up listening on PORT ${config_1.default.port}`);
    }).on('error', err => {
        logger_1.default.error(err);
        process.exit(1);
    });
}
startServer();
//# sourceMappingURL=main.js.map