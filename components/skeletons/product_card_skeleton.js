import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="shadow max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="h-56 w-full bg-gray-300 mb-2"></div>

        <div className="m-4">
          <div className="h-3 w-1/2 bg-gray-300 rounded mb-2"></div>

          <div className="h-3 bg-gray-300 rounded mb-7">
            <div className="h-3 bg-gray-300 rounded mb-1"></div>
            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
          </div>

          <div className="flex w-3/4">
            <div className="h-3 w-1/2 bg-gray-300 rounded mr-4"></div>
            <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
