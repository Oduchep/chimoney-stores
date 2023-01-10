import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div className="cursor-pointer shadow hover:shadow-lg transition-all ease-in-out duration-500 hover:scale-105">
      <Link href={`/product/${item.id}`}>
        <>
          <div className="h-56 w-full relative">
            <Image
              src={item.thumbnail}
              alt="pic"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority="true"
            />
          </div>

          <div className="p-4">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm font-light my-2">
              {item.description.length > 50
                ? `${item.description.substring(0, 50)}...`
                : item.description}
            </p>
            <p>
              <span className="font-semibold">Price: </span>{' '}
              <span className="text-sm">${item.price}</span>
            </p>
          </div>
        </>
      </Link>
    </div>
  );
};

export default ProductCard;
