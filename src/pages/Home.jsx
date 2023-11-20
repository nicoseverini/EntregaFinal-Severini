import React from 'react';
import { useAllProducts } from '../hooks/useProducts';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Home = () => {
  const { products, loading } = useAllProducts(20); 

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
}

export default Home