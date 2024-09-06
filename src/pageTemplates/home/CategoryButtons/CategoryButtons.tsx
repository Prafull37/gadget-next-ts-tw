import Link from 'next/link';
import Section from '../components/Section';
import { FaChevronCircleRight } from 'react-icons/fa';

type CategoryButtonProps = {
  title: string;
  value: Array<string>;
};

async function getCategoriesDetails(categories: CategoryButtonProps['value']) {
  const item = [];
  for (let id of categories) {
    try {
      console.log(`${process.env.NEXT_JS_API_ORIGIN}/api/category/${id}`);
      const response = await fetch(
        `${process.env.NEXT_JS_API_ORIGIN}/api/category/${id}`
      );
      const data = await response.json();
      item.push(data);
    } catch (e) {
      //error
      console.error(e);
    }
  }
  return item;
}

export default async function CategoryButton(props: CategoryButtonProps) {
  const { title, value } = props;
  const categories = await getCategoriesDetails(value);
  return (
    <Section
      heading={title}
      icon={
        <Link href={'/categories'} className="text-sm text-blue-600">
          <FaChevronCircleRight />
        </Link>
      }
    >
      <div className="flex flex-wrap items-center bg-white justify-between content-start">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/products?categoryId=${item.id}`}
            className="p-4 text-sm font-normal text-center inline-block w-[50%] cursor-pointer border-[0.5px] hover:bg-slate-100"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </Section>
  );
}
