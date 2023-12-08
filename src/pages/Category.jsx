import React from "react";
import { useParams } from "react-router-dom";
import { useSingleCategory } from "../hooks";
import { ItemListContainer, LoaderComponent } from "../components";

export const Category = () => {
  const { categoryId } = useParams();
  const { products, loading } = useSingleCategory("products", categoryId, "category");

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
