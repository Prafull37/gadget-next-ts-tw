import { categoryDb } from '@/db';
import _keys from 'lodash/keys';
import { NextResponse } from 'next/server';

//generate filter dynamically....
export async function GET() {
  return NextResponse.json({
    categories: {
      title: 'Categories',
      key: 'categories',
      allowedValues: categoryDb.getAll(),
      widget: 'checkbox',
    },
  });
}
