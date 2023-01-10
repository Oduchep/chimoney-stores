import React from 'react';

const Counter = ({ count, decreaseCount, increaseCount }) => {
  return (
    <div className="flex items-center">
      <div className="border rounded">
        <button
          onClick={decreaseCount}
          className="bg-pink-500 hover:bg-pink-700 py-[2px] px-2 text-white rounded-l transition-all ease-in-out duration-500"
        >
          -
        </button>

        <span className="px-2"> {count} </span>

        <button
          onClick={increaseCount}
          className="bg-pink-500 hover:bg-pink-700 py-[2px] px-2 text-white transition-all ease-in-out duration-500 rounded-r"
        >
          +
        </button>
      </div>

      <div className="ml-4 text-sm font-light">
        ({count} {count > 1 ? 'items' : 'item'} in cart)
      </div>
    </div>
  );
};

export default Counter;
