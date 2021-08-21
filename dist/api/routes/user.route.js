"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = __importDefault(require("../../controllers"));
const getUserRoute = () => {
    return [{
            path: "/user",
            method: "get",
            handler: controllers_1.default.getUser
        }];
};
exports.default = getUserRoute;
//# sourceMappingURL=user.route.js.map