import { IProduct } from '../models/product.interface';
import axios from 'axios';
import config from '../config';
import HttpError from '../api/error';

const SORT_METHOD_LOW = 'low';
const SORT_METHOD_HIGH = 'high';
const SORT_METHOD_ASC = 'ascending';
const SORT_METHOD_DESC = 'descending';
const SORT_METHOD_RECOMMENDED = 'recommended';
const SORT_METHODS = [SORT_METHOD_LOW, SORT_METHOD_HIGH, SORT_METHOD_ASC, SORT_METHOD_DESC, SORT_METHOD_RECOMMENDED];

export const getProducts = async (sortOption: string): Promise<IProduct[]> => {
  sortOption = sortOption.toLowerCase();
  if (!SORT_METHODS.includes(sortOption.toLowerCase())) {
    throw new HttpError(
      400,
      `param 'sortOption' is required using one of following values: ${SORT_METHODS.toString()}`,
    );
  }

  const resp = await axios.get(`${config.externalService.wooliesBaseUrl}/products?token=${config.secret.token}`);
  let productCollection = resp.data;

  if (sortOption == SORT_METHOD_LOW || sortOption == SORT_METHOD_HIGH) {
    productCollection = sortByPrice(productCollection, sortOption);
  } else if (sortOption == SORT_METHOD_ASC || sortOption == SORT_METHOD_DESC) {
    productCollection = sortByName(productCollection, sortOption);
  } else if (sortOption == SORT_METHOD_RECOMMENDED) {
    productCollection = await sortByPopularity(productCollection);
  }

  return productCollection;
};

const sortByName = (productCollection: IProduct[], sortOption: string): IProduct[] => {
  return sortOption == SORT_METHOD_ASC
    ? productCollection.sort((a, b) => (a.name > b.name ? 1 : -1))
    : productCollection.sort((a, b) => (a.name < b.name ? 1 : -1));
};

const sortByPrice = (productCollection: IProduct[], sortOption: string): IProduct[] => {
  return sortOption == SORT_METHOD_LOW
    ? productCollection.sort((a, b) => a.price - b.price)
    : productCollection.sort((a, b) => b.price - a.price);
};

const sortByPopularity = async (productCollection): Promise<IProduct[]> => {
  const resp = await axios.get(`${config.externalService.wooliesBaseUrl}/shopperHistory?token=${config.secret.token}`);
  const responseData = resp.data;
  let productsByUsers = responseData.reduce((acc, val) => acc.concat(val.products), []);

  const cnts = productsByUsers.reduce(function (obj, item) {
    obj[item.name] = (obj[item.name] || 0) + 1;
    return obj;
  }, {});

  productCollection = productCollection.sort((a, b) => (cnts[b.name] || 0) - (cnts[a.name] || 0));
  return productCollection;
};
