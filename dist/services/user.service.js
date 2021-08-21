"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const config_1 = __importDefault(require("../config"));
exports.getUser = async () => {
    const userData = { name: 'test', token: config_1.default.secret.token };
    return userData;
};
//# sourceMappingURL=user.service.js.map