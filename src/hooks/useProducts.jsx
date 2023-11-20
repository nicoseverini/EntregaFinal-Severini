import { useState, useEffect } from "react";
import { getAllProducts, getSingleProduct } from "../services";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllProducts(limit)
      .then((res) => setProducts(res.data.products))
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
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