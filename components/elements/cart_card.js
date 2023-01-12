import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ReactStars from 'react-stars';
import {
  moneyFormat,
  triggerUpdateStore,
  triggerUpdateStoreCount,
} from '../../utils/helpers';
import Counter from './counter';
import CountUp from 'react-countup';

const CartCard = ({
  item,
  removeFromCart,
  store,
  setStore,
  cart,
  setCart,
  checkoutList,
  setCheckoutList,
  sumCheckoutlist,
}) => {
  const [count, setCount] = useState();
  const [itemChecked, setItemChecked] = useState(false);
  const amount = item?.price * count;

  const checkerValue = store.filter((product) => product?.id == item?.id);
  const cartItem = cart?.filter((product) => product?.id == item?.id);
  const newCart = cart?.filter((product) => product?.id !== item?.id);

  const decreaseCount = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
      const updateDecrement = {
        ...checkerValue?.[0],
        count: checkerValue?.[0]?.count - 1,
      };
      const updatedCartItem = {
        ...cartItem?.[0],
        count: cartItem?.[0]?.count - 1,
      };

      setCart([updatedCartItem, ...newCart]);

      triggerUpdateStoreCount(store, updateDecrement);
      triggerUpdateStore(setStore);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
    const updateIncrement = {
      ...checkerValue?.[0],
      count: checkerValue?.[0]?.count + 1,
    };

    const updatedCartItem = {
      ...cartItem?.[0],
      count: cartItem?.[0]?.count + 1,
    };

    setCart([updatedCartItem, ...newCart]);

    triggerUpdateStoreCount(store, updateIncrement);
    triggerUpdateStore(setStore);
  };

  useEffect(() => {
    setCount(checkerValue?.[0]?.count);
  }, [checkerValue]);

  const addToCheckout = () => {
    setItemChecked(!itemChecked);

    if (itemChecked) {
      const newCheckout = checkoutList.filter(
        (product) => product?.id !== item?.id,
      );

      setCheckoutList(newCheckout);
      sumCheckoutlist(newCheckout);
    } else {
      const newCheckout = [...checkoutList, item];
      setCheckoutList(newCheckout);
      sumCheckoutlist(newCheckout);
    }
  };

  return (
    <div className="flex md:items-center">
      <div className="mr-3 md:mr-5">
        <input
          type="checkbox"
          checked={itemChecked}
          onChange={() => addToCheckout()}
          className="w-4 h-4 cursor-pointer bg-white text-pink-500 accent-pink-500  rounded"
        />
      </div>

      <div className="flex-1 md:flex items-center">
        <Link href={`/product/${item?.id}`}>
          <div className="h-48 md:w-48 relative">
            <Image
              src={item?.thumbnail}
              alt="pic"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority="true"
            />
          </div>
        </Link>

        <div className="flex-1 md:flex">
          <div className="flex-1 md:mx-10 mt-5 md:mt-0">
            <div className="mb-2 capitalize">
              {item?.brand} | {item?.category}
            </div>

            <div className="mb-4">
              <ReactStars
                count={5}
                value={item?.rating}
                size={20}
                edit={false}
                color2={'#ffd700'}
              />
            </div>

            <div className="mb-5"> {item?.description}</div>

            <div className="mb-5">
              <Counter
                count={checkerValue?.[0]?.count || item?.count}
                decreaseCount={decreaseCount}
                increaseCount={increaseCount}
              />
            </div>

            <div className="mb-5">
              <button
                onClick={() => removeFromCart(item?.id)}
                className="bg-gray-400 hover:bg-gray-500 py-2 px-4 text-sm text-white rounded transition-all ease-in-out duration-500"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="text-right font-semibold">
            <div className="text-xs font-light">${item?.price}</div>
            <div>
              $<CountUp end={amount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
