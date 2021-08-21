"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.info(`${req.method} : ${req.originalUrl}`);
    next();
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map