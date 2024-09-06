import { Product } from '@/types/Product';
import RatingOverview from './RatingOverview/RatingOverview';
import AllReviewCard from './AllReviewsCard/AllReviewsCard';

type RatingSectionProps = {
  id: string;
  ratings: Product['ratings'];
};

async function getProductReviews(id: string): Promise<{
  totalLength: number;
  reviewsCountByRating: { [key: string]: number };
}> {
  try {
    const res = await fetch(
      `${process.env.NEXT_JS_API_ORIGIN}/api/products/${id}/reviews`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);

    return {
      totalLength: 0,
      reviewsCountByRating: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
    };
  }
}

export default async function RatingSection(props: RatingSectionProps) {
  const { id, ratings } = props;
  const { totalLength, reviewsCountByRating } = await getProductReviews(id);

  return (
    <>
      <RatingOverview
        ratings={ratings}
        totalReviewCount={totalLength}
        reviewsCountByRating={reviewsCountByRating}
      />

      {totalLength > 0 && (
        <div className="bg-white py-4 px-2 my-4">
          <AllReviewCard />
        </div>
      )}
    </>
  );
}
