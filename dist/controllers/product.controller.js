"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const services_1 = require("../services");
exports.getProducts = async (req, res, next) => {
    const sortOption = req.query.sortOption;
    const productCollection = await services_1.productService.getProducts(sortOption);
    res.status(200).json(productCollection);
};
//# sourceMappingURL=product.controller.js.map