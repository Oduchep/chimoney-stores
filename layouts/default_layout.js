import { useState } from 'react';
import Image from 'next/image';
import { Navbar } from './components';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main className="px-4 md:px-8 py-8 mt-20">{children}</main>
    </div>
  );
};

export default DefaultLayout;
