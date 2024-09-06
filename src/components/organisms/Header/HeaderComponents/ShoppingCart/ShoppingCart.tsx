import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

export default function ShoppingCart() {
  return (
    <div className="flex">
      <Link href="/cart">
        <FaCartShopping size={'1rem'} />
      </Link>
      <div className="text-xs text-white h-4 w-4 rounded-full text-center bg-[#101827]">
        0
      </div>
    </div>
  );
}
