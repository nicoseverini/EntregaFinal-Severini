import React from 'react';
import { Button } from 'react-bootstrap';
import { AddItemButton } from '../AddItemButton'
export const ItemCount = () => {
  const [ count, setCount ] = React.useState(1)

  const handleAddProduct = () => {
    setCount(count + 1)
  }

  const handleRemoveProduct = () => {
    if (count > 1){
      setCount(count - 1)
    }
  }

  const handleResetCount = () => {
    setCount(1)
  }

  return (
    <div>
      <Button onClick={handleRemoveProduct}>-</Button>
      <input type="number" value={count} />
      <Button onClick={handleAddProduct}>+</Button>
      <AddItemButton count={count} handleResetCount={handleResetCount}/>
    </div>
  )
}

