import React from 'react';
import { useAllProducts } from '../hooks';
import { ItemListContainer, LoaderComponent } from '../components';

export const Home = () => {
  const { products, loading, error } = useAllProducts(20); 

  return (
    <>
      {
        loading ? (
          <LoaderComponent />
        ) : (
          error ? (
            <div>Hubo un error</div>
          ) : (
            <ItemListContainer products={products} />
          )
        )
      }
    </>
  );
};

