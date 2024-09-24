import _countBy from 'lodash/countBy';
import _size from 'lodash/size';

import { reviewDb } from '@/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("invoked this...")
  try {
    const { id } = params;
    const reviews = reviewDb.getReviewsByProductId(id);
    const countBy = _countBy(reviews, ({ rating }: { rating: number }) =>
      Math.floor(rating)
    );
    return NextResponse.json({
      totalLength: _size(reviews),
      reviewsCountByRating: countBy,
      reviews,
    });
  } catch (e) {}
}
