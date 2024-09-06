import _values from 'lodash/values';
import _size from 'lodash/size';

import _isEmpty from 'lodash/isEmpty';

import { productDb } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const categories: string[] = searchParams.get('categories')?.split(',') || [];
  const page: number = Number(searchParams.get('page')) || 1;
  const limit: number = Number(searchParams.get('limit')) || 50;

  let products = {};

  if (_isEmpty(categories)) {
    products = productDb.getAll();
  } else {
    for (let categoryId of categories) {
      try {
        const items = await productDb.getByCategoryId(categoryId);
        products = { ...products, ...items };
      } catch (e) {}
    }
  }

  const currentPage = page - 1;

  return NextResponse.json({
    data: _values(products).slice(currentPage * limit, page * limit),
    totalCount: _size(products),
  });
}
