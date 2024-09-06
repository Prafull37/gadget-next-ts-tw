'use client';
import { useState } from 'react';

import SidePanel from '@/components/molecules/Sidepanel/Sidepanel';
import { FaBars } from 'react-icons/fa6';
import Link from 'next/link';

const linkClassName = 'text-sm font-normal block mb-1 p-1';
const headingClassName = 'text-[14px] font-bold mb-1';
const containerClassName = 'border-b border-solid w-full py-2';

export default function SidepanelContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={onOpen}>
        <FaBars size={'1rem'} />
      </button>
      <SidePanel isOpen={isOpen} onClose={onClose}>
        <h3>Gadgets...</h3>
        <div className="flex flex-col items-center my-4">
          <div className={containerClassName}>
            <Link href="/login" className={linkClassName}>
              Login & Signup
            </Link>
          </div>
          <div className={containerClassName}>
            <h4 className={headingClassName}>Products</h4>
            <Link href="/products" className={linkClassName}>
              All Products
            </Link>
            <h4 className={headingClassName}>Categories</h4>
            <Link href="/categories" className={linkClassName}>
              All Categories
            </Link>
          </div>
          <div className={containerClassName}>
            <h4 className={headingClassName}>Orders & Carts</h4>
            <Link href="/cart" className={linkClassName}>
              My Cart
            </Link>
            <Link href="/order-history" className={linkClassName}>
              My Orders
            </Link>
            <Link href="/wishlist" className={linkClassName}>
              My Wishlist
            </Link>
          </div>
          <div className={containerClassName}>
            <Link href="/categories" className={linkClassName}>
              Profile
            </Link>
          </div>
          <div className={containerClassName}>
            <Link href="/" className={linkClassName}>
              Sell On Gadgets...
            </Link>
          </div>
          <div className={containerClassName}>
            <h4 className={headingClassName}>Connect With Us</h4>
            <Link href="/" className={linkClassName}>
              Customer Support
            </Link>
          </div>
          <div className={containerClassName}>
            <h4 className={headingClassName}>Privacy And Legal</h4>
            <Link href="/" className={linkClassName}>
              Privacy
            </Link>
            <Link href="/" className={linkClassName}>
              Terms & Condition
            </Link>
            <Link href="/" className={linkClassName}>
              Legal
            </Link>
          </div>
        </div>
      </SidePanel>
    </>
  );
}
