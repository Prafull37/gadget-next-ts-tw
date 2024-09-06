import { NextRequest, NextResponse } from 'next/server';
import categories from '@/json/datas/categories.json';

export function GET(req: NextRequest) {
  return NextResponse.json({ ...categories.categories });
}
