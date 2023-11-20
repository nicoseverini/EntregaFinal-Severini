import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useSingleCategory } from "../hooks/useCategories";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useSingleCategory(categoryId)

  return <ItemListContainer products={products} />;
};

export default Category;