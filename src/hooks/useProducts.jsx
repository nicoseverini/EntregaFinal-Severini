import { useState, useEffect } from "react";
import { getAllProducts, getSingleProduct } from "../services/ApiProducts";


export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts(limit)
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error))
  }, []);

  return { products };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getSingleProduct(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error))
  }, [id]);

  return { product };
}