"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
exports.getProducts = async (sortOption) => {
    const resp = await axios_1.default.get(`${config_1.default.resourceUri.product}?token=${config_1.default.secret.token}`);
    let productCollection = resp.data;
    if (!sortOption)
        return productCollection;
    if (sortOption == "Low" /* LOW */ || sortOption == "High" /* HIGH */) {
        productCollection = sortByPrice(productCollection, sortOption);
    }
    else if (sortOption == "Ascending" /* ASCENDING */ || sortOption == "Descending" /* DESCENDING */) {
        productCollection = sortByName(productCollection, sortOption);
    }
    else if (sortOption == "Recommended" /* RECEOMMENDED */) {
        productCollection = await sortByPopularity();
    }
    return productCollection;
};
const sortByName = (productCollection, sortOption) => {
    return sortOption == "Ascending" /* ASCENDING */
        ? productCollection.sort((a, b) => (a.name > b.name ? 1 : -1))
        : productCollection.sort((a, b) => (a.name < b.name ? 1 : -1));
};
const sortByPrice = (productCollection, sortOption) => {
    return sortOption == "Low" /* LOW */
        ? productCollection.sort((a, b) => a.price - b.price)
        : productCollection.sort((a, b) => b.price - a.price);
};
const sortByPopularity = async () => {
    const resp = await axios_1.default.get(`${config_1.default.resourceUri.history}?token=${config_1.default.secret.token}`);
    const responseData = resp.data;
    let productCollection = responseData.reduce((acc, val) => acc.concat(val.products), []);
    const cnts = productCollection.reduce(function (obj, item) {
        obj[item.name] = (obj[item.name] || 0) + 1;
        return obj;
    }, {});
    let result = productCollection.reduce((acc, current) => {
        const product = acc.find(item => item.name === current.name);
        if (!product) {
            return acc.concat([current]);
        }
        else {
            return acc;
        }
    }, []);
    result = result.sort((a, b) => cnts[b.name] - cnts[a.name]);
    return result;
};
//# sourceMappingURL=product.service.js.map