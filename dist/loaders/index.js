"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const logger_1 = __importDefault(require("./logger"));
exports.default = async ({ expressApp }) => {
    logger_1.default.info('dependency Injector loaded');
    await express_1.default({ app: expressApp });
    logger_1.default.info('express loaded');
};
//# sourceMappingURL=index.js.map