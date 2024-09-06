import { Product, ProductMetadata } from '@/types/Product';
import { Review } from '@/types/Reviews';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';
import ProductDetails from './ProductDetails/ProductDetails';
import CompanyDetails from './CompanyDetails/CompnayDetails';

type SpecificationAndCompanyProps = {
  id: string;
};

async function getProductMetadata(
  id: string
): Promise<ProductMetadata | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_JS_API_ORIGIN}/api/products/${id}/metadata`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function SpecificationAndCompany(
  props: SpecificationAndCompanyProps
) {
  const { id } = props;
  const { manufacturerDetails, company, specification, productDescription } =
    (await getProductMetadata(id)) as ProductMetadata;

  return (
    <>
      <ProductDetails
        specification={specification}
        productDescription={productDescription}
      />
      <CompanyDetails
        company={company}
        manufacturerDetails={manufacturerDetails}
      />
    </>
  );
}
