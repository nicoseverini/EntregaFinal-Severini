import { useState, useEffect } from "react";
import { getAllCategories } from "../services";
import { getDocs, getFirestore, collection, query, where} from "firebase/firestore";

export const  useAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return { categories };
};

export const useSingleCategory = (collectionName, categoryId, fieldToFilter) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, collectionName);

    const categoryQuery = query(collectionRef, where(fieldToFilter, "==", categoryId))

    getDocs(categoryQuery)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

  }, [categoryId]);

  return { products, loading, error };
};