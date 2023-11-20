import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Item = () => {
  const { id } = useParams();
  const { product, loading } = useSingleProduct(id);

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

export default Item;