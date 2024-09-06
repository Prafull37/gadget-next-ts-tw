import ProductDetails from '@/pageTemplates/products/[id]/root';

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page(props: PageProps) {
  const { id } = props.params;

  return <ProductDetails id={id} />;
}
