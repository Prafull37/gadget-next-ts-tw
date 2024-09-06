import { NextRequest, NextResponse } from 'next/server';
import categories from '@/json/datas/categories.json';
import { categoryDb } from '@/db';

//get category details
export function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id: categoryId } = params;
  categoryDb.getById(categoryId);
  return NextResponse.json(categoryDb.getById(categoryId));
}
