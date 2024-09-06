'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AddReviewLink() {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}/review/new`}
      className="flex justify-between items-center text-sm p-2 border rounded-sm"
    >
      Add Review
    </Link>
  );
}
