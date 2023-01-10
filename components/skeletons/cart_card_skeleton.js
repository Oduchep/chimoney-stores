import React from 'react';
import ReactStars from 'react-stars';

const CartCardSkeleton = () => {
  return (
    <div className="shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex">
        <div className="h-48 w-48 bg-gray-300"></div>
        <div className="flex-1 m-4">
          <div className="h-3 w-1/2 bg-gray-300 rounded mb-2"></div>

          <div className="mb-4">
            <ReactStars count={5} size={20} edit={false} color2={'#ffd700'} />
          </div>

          <div className="h-3 bg-gray-300 rounded mb-10">
            <div className="h-3 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
          </div>

          <div className="w-3/4">
            <div className="h-3 w-1/2 bg-gray-300 rounded mr-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCardSkeleton;
