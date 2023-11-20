import React from 'react';
import { useAllProducts } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
  const { products } = useAllProducts(20); 

  return (
    <ItemListContainer products={products} />
  )
}

export default Home