import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Search } from '../../components';
import chimoneyRoutes from '../../constants/chimoneyRoutes';
import { debounce } from '../../utils/helpers';

const Navbar = () => {
  const { route } = useRouter();

  // for scrolling
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10,
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      className={`${
        visible ? 'top-0' : '-top-[70px]'
      } fixed transition-all duration-300 ease-in-out left-0 z-40 w-full bg-white border-b py-4 px-5 md:px-10 flex items-center justify-between`}
    >
      <Link
        href={chimoneyRoutes.HOME}
        className={`md:text-lg hover:text-pink-500 hover:font-bold transition-all ease-in-out duration-300 ${
          chimoneyRoutes.HOME === route && 'text-pink-500 font-semibold'
        }`}
      >
        Home
      </Link>

      <div className="mx-3">
        <Search />
      </div>

      <Link
        href={chimoneyRoutes.CART}
        className={`md:text-lg hover:text-pink-500 hover:font-bold transition-all ease-in-out duration-300 ${
          chimoneyRoutes.CART === route && 'text-pink-500 font-semibold'
        }`}
      >
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
