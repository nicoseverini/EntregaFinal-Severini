import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context';
export const ItemCount = () => {
  const { qtyItems, setQtyItems } = useContext(CartContext);
  const [count,setCount] = React.useState(qtyItems)

  const handleAddProduct = () => {
    setCount(count + 1)
    setQtyItems(count + 1)
  }

  const handleRemoveProduct = () => {
    if (count > 0){
      setCount(count - 1)
      setQtyItems(count - 1)
    }
  }

  return (
    <div>
      <Button onClick={handleRemoveProduct}>-</Button>
      <input type="number" value={count}/>
      <Button onClick={handleAddProduct}>+</Button>
    </div>
  )
}

