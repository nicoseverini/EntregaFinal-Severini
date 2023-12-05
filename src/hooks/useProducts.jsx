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
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSingleProduct(id)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 200);

    return () => clearTimeout(timeoutId);

  }, [id]);

  return { product, loading, error };
};



