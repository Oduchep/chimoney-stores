import Image from 'next/image';
import React, { useState } from 'react';

const ImageShowcase = ({ gallery, loading }) => {
  const [currentImg, setCurrentImg] = useState();

  return (
    <div className="py-4 md:px-4">
      {loading ? (
        <div className="h-56 md:h-80 md:w-80 bg-gray-300 mx-auto"></div>
      ) : (
        <div className="h-56 md:h-80 overflow-y-hidden">
          <Image
            src={currentImg || gallery?.[0]}
            width={320}
            height={320}
            className="mx-auto"
            alt="pic"
          />
        </div>
      )}

      <div className={`mt-10 md:px-5 flex items-center justify-center`}>
        {gallery?.map((image, i) => (
          <div
            key={i}
            onClick={() => setCurrentImg(image)}
            className={`h-12 w-12 lg:h-16 lg:w-16 mx-3 lg:mx-6 relative shadow hover:shadow-lg cursor-pointer transition-all ease-in-out duration-300 scale-125 ${
              currentImg === image && 'border border-pink-500'
            }`}
          >
            <Image
              src={image}
              alt="pic"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              priority="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
