import { productDb } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

//product by id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id: productId } = params;
  const productDetails = productDb.getById(productId);
  return NextResponse.json(productDetails);
}
