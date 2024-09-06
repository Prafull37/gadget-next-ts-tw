import { NextRequest, NextResponse } from 'next/server';

import _sampleSize from 'lodash/sampleSize';

import products from '@/json/datas/products.json';
import { productDb } from '@/db';

//get random product/products by categoryId.
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  return new Promise((resolve, reject) => {
    try {
      const { id: categoryId } = params;
      const noOfItem = req.nextUrl.searchParams.get('noOfItem');

      const totalProduct = [];
      //move to postgress..
      for (let [id, item] of Object.entries(productDb.getAll())) {
        if (totalProduct.length === 50) break;
        if (
          (item?.category_id || '') === categoryId &&
          totalProduct.length < 20
        ) {
          totalProduct.push(item);
        }
      }

      resolve(_sampleSize(totalProduct, noOfItem));
    } catch (e) {
      reject(e);
    }
  })
    .then((value) => NextResponse.json(value))
    .catch((e) => NextResponse.json(e));
}
