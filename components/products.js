import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { getAllProducts } from '../features';
import ProductCard from './product_card';

const Products = () => {
  const { data: allProducts, isLoading: productsLoading } = useQuery(
    ['products-data'],
    () => {
      return getAllProducts();
    },
  );

  const storeProducts = useMemo(() => {
    return allProducts?.products;
  }, [allProducts]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
      {storeProducts?.map((item) => (
        <ProductCard key={item?.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
