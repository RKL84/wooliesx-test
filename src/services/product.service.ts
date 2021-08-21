import { IProduct } from '../models/product.interface';
import axios from 'axios';
import config from '../config';

export const getProducts = async (sortOption: SortOption): Promise<IProduct[]> => {
  const resp = await axios.get(`${config.resourceUri.product}?token=${config.secret.token}`);
  let productCollection = resp.data;
  if (!sortOption) return productCollection;

  if (sortOption == SortOption.LOW || sortOption == SortOption.HIGH) {
    productCollection = sortByPrice(productCollection, sortOption);
  } else if (sortOption == SortOption.ASCENDING || sortOption == SortOption.DESCENDING) {
    productCollection = sortByName(productCollection, sortOption);
  } else if (sortOption == SortOption.RECEOMMENDED) {
    productCollection = await sortByPopularity();
  }

  return productCollection;
};

const sortByName = (productCollection: IProduct[], sortOption: SortOption): IProduct[] => {
  return sortOption == SortOption.ASCENDING
    ? productCollection.sort((a, b) => (a.name > b.name ? 1 : -1))
    : productCollection.sort((a, b) => (a.name < b.name ? 1 : -1));
};

const sortByPrice = (productCollection: IProduct[], sortOption: SortOption): IProduct[] => {
  return sortOption == SortOption.LOW
    ? productCollection.sort((a, b) => a.price - b.price)
    : productCollection.sort((a, b) => b.price - a.price);
};

const sortByPopularity = async (): Promise<IProduct[]> => {
  const resp = await axios.get(`${config.resourceUri.history}?token=${config.secret.token}`);
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
    } else {
      return acc;
    }
  }, []);

  result = result.sort((a, b) => cnts[b.name] - cnts[a.name]);
  return result;
};
