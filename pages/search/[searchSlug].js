import { useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { ProductCard, ProductCardSkeleton } from '../../components';
import { getBySearch } from '../../features';

const SearchSlug = () => {
  const skeletonCount = [1, 2, 3, 4];
  const { query } = useRouter();
  const { searchSlug } = query;

  //   get products by search
  const { data: searchResult, isLoading: productLoading } = useQuery(
    ['search-result-data', searchSlug],
    () => {
      return getBySearch({ searchSlug });
    },
  );

  const searchResultData = useMemo(() => {
    return searchResult?.products;
  }, [searchResult]);

  return (
    <>
      <Head>
        <title> {`Chimoney Stores | Search for ${searchSlug}`} </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="p-5 mb-5 md:mb-10">
          <h1 className="text-xl font-semibold">
            Showing search result for {searchSlug}{' '}
            <span className="font-normal">({searchResultData?.length})</span>
          </h1>
        </div>

        {productLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {skeletonCount?.map((skeleton, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : searchResultData?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {searchResultData?.map((item) => (
              <ProductCard key={item?.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-10 text-lg text-center font-light">
            No result for this search
          </div>
        )}
      </div>
    </>
  );
};

export default SearchSlug;
