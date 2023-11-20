import { useState, useEffect } from "react";
import { getAllProducts, getSingleProduct } from "../services/ApiProducts";


export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts(limit)
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getSingleProduct(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading };
}