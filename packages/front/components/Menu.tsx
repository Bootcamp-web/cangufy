import React from 'react';
import Link from 'next/link';

const Menu = () => {

 
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Parents">Parents</Link>
      </li>
      <li>
        <Link href="/Nanny">Nanny</Link>
      </li>
    </ul>
  );
};

export default Menu;