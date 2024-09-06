'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight } from 'react-icons/fa6';

export default function AllReviewCard() {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}/review/all`}
      className="flex justify-between items-center"
    >
      <h5>All Reviews</h5>
      <div>
        <FaChevronRight fontSize={'1rem'} />
      </div>
    </Link>
  );
}
