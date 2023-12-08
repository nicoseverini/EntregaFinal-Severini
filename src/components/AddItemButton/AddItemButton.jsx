import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { CartContext } from '../../context';

export const AddItemButton = ({label = "Agregar al Carrito", count, handleResetCount}) => {
  const { qtyItems, setQtyItems } = useContext(CartContext);
  
  const handleAddCart = () => {
    setQtyItems( qtyItems + count );
    handleResetCount();
  }

  return (
    <Button onClick={handleAddCart} style={{margin: '10px 0'}}>{label}</Button>
  )
}


