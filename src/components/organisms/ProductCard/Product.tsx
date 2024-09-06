import { Product as ProductType } from '@/types/Product';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = {
  id: ProductType['id'];
  image: ProductType['image'];
  name: ProductType['name'];
  children?: React.ReactNode;
};

export default function ProductCard(props: ProductCardProps) {
  const { id, image, name, children } = props;
  return (
    <Link
      key={id}
      href={`/products/${id}`}
      className="inline-block w-[50%] px-2 my-2 overflow-hidden text-ellipsis"
    >
      <div className="flex flex-col bg-white hover:bg-slate-100 h-[16rem]  p-2">
        <div className="relative h-[50%]">
          <div>
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold line-clamp-3">{name}</h2>
          {children && children}
        </div>
      </div>
    </Link>
  );
}
