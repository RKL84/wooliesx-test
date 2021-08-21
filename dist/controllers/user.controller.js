"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const services_1 = require("../services");
exports.getUser = async (req, res, next) => {
    const userInfo = await services_1.userService.getUser();
    res.status(200).json(userInfo);
};
//# sourceMappingURL=user.controller.js.map