import _get from 'lodash/get';
import _map from 'lodash/map';

import Card from '../../../components/Card/Card';

import { ProductMetadata, Specs } from '@/types/Product';
import Accordion from '@/components/atoms/Accordion';

type ProductDetailsProps = {
  specification: ProductMetadata['specification'];
  productDescription: ProductMetadata['productDescription'];
};

export default function ProductDetails(props: ProductDetailsProps) {
  const { specification, productDescription } = props;

  return (
    <Card className="my-4">
      <Accordion header="Product Details">
        <div className="mb-2">
          {_map(specification, (specs: Specs[string], key: string) => (
            <div key={key}>
              <div className="text-gray-900 font-semibold text-md my-4">
                {specs.title}
              </div>
              <div className="flex flex-col">
                {_map(
                  specs.values,
                  (feature: Specs[string]['values']['string'], key: string) => (
                    <div key={key} className="flex flex-row my-1">
                      <div className="text-gray-400 font-normal text-sm basis-[50%]">
                        {feature.title}
                      </div>
                      <div className="text-sm basis-[50%]">{feature.value}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-start items-start mt-4">
          <h3 className="text-md font-semibold mb-2">Details</h3>
          <div className="text-xs font-normal">{productDescription}</div>
        </div>
      </Accordion>
    </Card>
  );
}
