import React from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";

const Item = () => {
  const { id } = useParams();
  const { product } = useSingleProduct(id);

  return <ItemDetailContainer product={product} />;
};

export default Item;