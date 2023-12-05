import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks";
import { ItemDetailContainer, LoaderComponent } from "../components";

export const Item = () => {
  const { id } = useParams();
  const { product, loading, error } = useSingleProduct(id);

  return (
    <>
    {
      loading ? (
        <LoaderComponent />
      ) : (
        <ItemDetailContainer product={product} />
      )
    }
  </>
    
  );
};
