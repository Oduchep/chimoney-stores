import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Search } from '../../components';
import chimoneyRoutes from '../../constants/chimoneyRoutes';

const Navbar = () => {
  const { route } = useRouter();

  return (
    <div className="border-b py-4 px-10 flex items-center justify-between">
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
