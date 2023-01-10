import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react';
import { getAllProducts } from '../features';
import ProductCard from './elements/product_card';
import ProductCardSkeleton from './skeletons/product_card_skeleton';

const Products = () => {
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8];
  const [limit, setLimit] = useState(100);
  const { data: allProducts, isLoading: productsLoading } = useQuery(
    ['products-data', limit],
    () => {
      return getAllProducts({ limit });
    },
  );

  const storeProducts = useMemo(() => {
    return allProducts?.products;
  }, [allProducts]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
      {productsLoading
        ? skeletonCount?.map((skeleton, i) => <ProductCardSkeleton key={i} />)
        : storeProducts?.map((item) => (
            <ProductCard key={item?.id} item={item} />
          ))}
    </div>
  );
};

export default Products;
