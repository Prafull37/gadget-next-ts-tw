import _reduce from 'lodash/reduce';
import _join from 'lodash/join';

import { NextRequest, NextResponse } from 'next/server';
import {
  randProductAdjective,
  randWord,
  randLine,
  randProductDescription,
  randFullAddress,
  randCompanyName,
  randCountry,
  randEmail,
  randNumber,
} from '@ngneat/falso';

import { Specs } from '@/types/Product';

const noOfCategories = [1, 2, 3];
const specificationPerCategory = [5, 10, 13, 15];

const selectRandom = (array: Array<number>): number => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateCategories = (no: number) => {
  let category = [];
  for (let i = 0; i < no; i++) {
    category.push(randProductAdjective());
  }
  return category;
};

const generateRandomSpecification = (no: number) => {
  let specification = {};
  for (let i = 0; i < no; i++) {
    //@ts-expect-error ignore
    specification[randWord()] = {
      title: randProductAdjective({ maxCharCount: 10 }),
      value: _join(randWord({ length: 5, capitalize: true }), ' '),
    };
  }

  return specification;
};

export async function GET(
  req: NextRequest
  //   { params }: { params: { id: string } }
) {
  const randomCategoryCount = selectRandom(noOfCategories);
  let data = {
    specification: {},
    productDescription: {},
    manufacturerDetails: {},
    company: {},
  };

  const categories = generateCategories(randomCategoryCount);
  const specification = _reduce(
    categories,
    (acc: Specs, category: string) => {
      const noOfSpec = selectRandom(specificationPerCategory);
      acc[category] = {
        title: category,
        values: generateRandomSpecification(noOfSpec),
      };
      return acc;
    },
    {}
  );

  data['specification'] = specification;

  data['productDescription'] = randProductDescription();

  const company = randCompanyName();
  data['manufacturerDetails'] = {
    manufactureName: company,
    address: randFullAddress(),
    countryOfOrigin: randCountry(),
  };

  data['company'] = {
    name: company,
    address: randFullAddress(),
    contact: {
      email: randEmail(),
      tel: {
        mobileNumber: randNumber(),
        countryCode: '+91',
      },
    },
  };

  return NextResponse.json(data);
}
