import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useSingleCategory } from "../hooks/useCategories";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Category = () => {
  const { categoryId } = useParams();
  const { products, loading } = useSingleCategory(categoryId)

  return (
    <>
      {
        loading ? (
          <LoaderComponent />
        ) : (
          <ItemListContainer products={products} />
        )
      }
    </>
    
  );
};

export default Category;