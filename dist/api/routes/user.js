"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const route = express_1.Router();
exports.default = (app) => {
    app.use('/', route);
    route.get('/user', controllers_1.userController.getUser);
};
//# sourceMappingURL=user.js.map