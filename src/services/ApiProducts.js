import axios from "axios";

export function getAllProducts(limit = 10) {
  return axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export function getSingleProduct(id = 1) {
  return axios.get(`https://dummyjson.com/products/${id}`);
}

export function getAllCategories() {
  return axios.get(`https://dummyjson.com/products/categories`);
}

export function getSingleCategory(categoryId = 1) {
  return axios.get(`https://dummyjson.com/products/category/${categoryId}`);
}