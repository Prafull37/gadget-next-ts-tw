import Product from '@/pageTemplates/products/root';

export default async function Page(props: {
  searchParams: { [key: string]: string };
}) {
  const { searchParams } = props;
  return <Product searchParams={searchParams} />;
}
