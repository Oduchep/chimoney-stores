import React from 'react';

const Counter = ({ count, decreaseCount, increaseCount }) => {
  return (
    <div className="flex items-center">
      <div>
        <button
          onClick={decreaseCount}
          className="bg-pink-500 hover:bg-pink-700 py-[2px] px-2 text-white rounded transition-all ease-in-out duration-500"
        >
          -
        </button>

        <span className="px-3"> {count} </span>

        <button
          onClick={increaseCount}
          className="bg-pink-500 hover:bg-pink-700 py-[2px] px-2 text-white rounded transition-all ease-in-out duration-500"
        >
          +
        </button>
      </div>

      <div className="ml-5 font-light">
        ({count} {count > 1 ? 'items' : 'item'} added)
      </div>
    </div>
  );
};

export default Counter;
