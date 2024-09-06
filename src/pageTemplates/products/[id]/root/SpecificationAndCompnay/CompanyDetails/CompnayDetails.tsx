import _get from 'lodash/get';
import _map from 'lodash/map';

import Card from '../../../components/Card/Card';

import { ProductMetadata } from '@/types/Product';
import Accordion from '@/components/atoms/Accordion';
import Link from 'next/link';
import { LINK_CLASS } from '@/constants/styles.constants';

type ProductDetailsProps = {
  manufacturerDetails: ProductMetadata['manufacturerDetails'];
  company: ProductMetadata['company'];
};

export default function CompanyDetails(props: ProductDetailsProps) {
  const { manufacturerDetails, company } = props;

  return (
    <Card className="my-4">
      <Accordion header="Company">
        <div className="flex flex-col">
          <div className="flex flex-col my-2">
            <div className="text-sm font-normal">Manufacturer Details</div>
            <div className="text-sm font-semibold text-gray-700">
              {_get(manufacturerDetails, 'manufactureName')}
            </div>
            <div className="text-xs font-light text-gray-700">
              {_get(manufacturerDetails, 'address')}
            </div>
          </div>
          <div className="flex flex-row my-2">
            <span className="text-sm font-semibold basis-[50%]">
              Country Of Origin :
            </span>
            <span className="text-sm font-normal  basis-[50%]">
              {_get(manufacturerDetails, 'countryOfOrigin')}
            </span>
          </div>
          <div className="flex flex-col my-2">
            <div className="text-sm font-normal">Company Details</div>
            <div className="text-sm font-semibold text-gray-700">
              {_get(company, 'name')}
            </div>
            <div className="text-xs font-light text-gray-700">
              {_get(company, 'address')}
            </div>
          </div>
          <div className="text-xs my-2">
            {' '}
            For Any Complaints/Support/Suggestions please reach out via{' '}
            <Link
              href={`mailto:${_get(company, 'contact.email')}`}
              className={LINK_CLASS}
            >
              {_get(company, 'contact.email')}
            </Link>{' '}
            or Call us at between Mon - Fri (10am - 5pm){' '}
            <Link
              href={`tel:${_get(company, 'contact.tel.countryCode')}${_get(company, 'contact.tel.mobileNumber')}`}
              className={LINK_CLASS}
            >
              {_get(company, 'contact.tel.countryCode')}-
              {_get(company, 'contact.tel.mobileNumber')}
            </Link>
          </div>
        </div>
      </Accordion>
    </Card>
  );
}
