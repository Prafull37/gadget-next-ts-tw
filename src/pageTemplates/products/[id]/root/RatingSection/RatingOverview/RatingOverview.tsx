import _get from 'lodash/get';
import _map from 'lodash/map';

import Card from '../../../components/Card/Card';

import { Product, ProductMetadata, Specs } from '@/types/Product';
import Seperator from '@/components/atoms/Seperator';
import { twMerge } from 'tailwind-merge';
import Rating from '@/components/atoms/Rating';
import AddReviewLink from './AddReview';

type RatingOverview = {
  ratings: Product['ratings'];
  totalReviewCount: number;
  //replace by types for api data
  reviewsCountByRating: {
    '1'?: number;
    '2'?: number;
    '3'?: number;
    '4'?: number;
    '5'?: number;
  };
};

const RATING_STATUS_VS_VALUE = {
  '1': 'Poor',
  '2': 'MID',
  '3': 'Average',
  '4': 'Good',
  '5': 'Best',
};

const RATING_STATUS_VS_COLOR = {
  '1': 'text-red-500',
  '2': 'text-orange-500',
  '3': 'text-yellow-500',
  '4': 'text-green-300',
  '5': 'text-green-500',
};

export default function RatingOverview(props: RatingOverview) {
  const { ratings, totalReviewCount, reviewsCountByRating } = props;
  const ratingNumber = Math.floor(_get(ratings, 'value')).toString();

  return (
    <Card className="my-4">
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-between items-center">
          <span className="text-sm">Write a review</span>
          <AddReviewLink />
        </div>
        <Seperator direction="vertical" />
        <div className="flex flex-row">
          <div className="flex basis-[50%] flex-col justify-center items-center m-1">
            <div
              className={twMerge(
                _get(RATING_STATUS_VS_COLOR, [ratingNumber], 'text-gray-500'),
                'text-sm'
              )}
            >
              {_get(RATING_STATUS_VS_VALUE, [ratingNumber], 'No Reviews')}
            </div>

            <Rating
              rating={_get(ratings, 'no_of_ratings')}
              classes={{ ratingContainer: 'text-sm' }}
            />
            <div className="text-xs text-gray-500 text-semibold text-center">
              {_get(ratings, 'no_of_ratings')} Ratings and {totalReviewCount}{' '}
              Reviews
            </div>
          </div>
          <Seperator />
          <div className="flex flex-col basis-[50%]">
            <div className="flex flex-row justify-between items-center text-xs">
              <div>5 &#9733;</div>
              <div>{reviewsCountByRating['5'] || 0}</div>
            </div>
            <div className="flex flex-row justify-between items-center text-xs">
              <div>4 &#9733;</div>
              <div>{reviewsCountByRating['4'] || 0}</div>
            </div>
            <div className="flex flex-row justify-between items-center text-xs">
              <div>3 &#9733;</div>
              <div>{reviewsCountByRating['3'] || 0}</div>
            </div>
            <div className="flex flex-row justify-between items-center text-xs">
              <div>2 &#9733;</div>
              <div>{reviewsCountByRating['2'] || 0}</div>
            </div>
            <div className="flex flex-row justify-between items-center text-xs">
              <div>1 &#9733;</div>
              <div>{reviewsCountByRating['1'] || 0}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
