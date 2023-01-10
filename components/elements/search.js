import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { searchIcon } from '../../public/assets/icons';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const { push } = useRouter();

  return (
    <form
      className="flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
        push(`/search/${searchText}`);
      }}
    >
      <div className="py-1 px-5 bg-[#F6F7F8] focus-within:bg-transparent border border-[#F6F7F8] focus-within:border-pink-500 transition-all ease-linear duration-300 rounded flex items-center">
        <Image src={searchIcon} height={15} width={14} alt="search icon" />

        <input
          className="py-2 w-full ml-3 focus:outline-0 bg-transparent placeholder:text-[#A8B4BF] placeholder:font-light"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for products, brands and categories"
        />
      </div>

      <Link
        href={`/search/${searchText}`}
        className="ml-4 py-[10px] px-3 bg-pink-500 hover:bg-pink-700 text-white uppercase transition-all ease-in-out duration-500 rounded"
      >
        search
      </Link>
    </form>
  );
};

export default Search;
