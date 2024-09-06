'use client';
import _map from 'lodash/map';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type RatingProps = {
  rating?: number;
  classes?: {
    ratingContainer?: string;
    singleRatingContainer?: string;
    rating?: string;
    highlightedRating?: string;
  };
};

export default function Rating(props: RatingProps) {
  const { rating: ratingFromProps = 0, classes = {} } = props;

  const [rating, setRating] = useState(ratingFromProps);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const getRatingWidth = (index: number) => {
    const fullStars = Math.floor(rating);
    const fractionalStar = rating - fullStars;
    if (index <= fullStars) return 100;
    if (index - rating < 1) return Math.floor(fractionalStar * 100);
    return 0;
  };

  return (
    <div>
      <div className="relative">
        <div className={twMerge('flex', classes.ratingContainer)}>
          {_map(Array.from(Array(5)), (k: number, index: number) => (
            <div
              className={twMerge(
                'relative mx-1',
                classes.singleRatingContainer
              )}
              key={index}
            >
              <span className={classes.rating}>&#9734;</span>
              <span
                className={twMerge(
                  'absolute inline-block top-0 left-0 text-orange-400 overflow-hidden',
                  classes.highlightedRating
                )}
                style={{ width: `${getRatingWidth(index + 1)}%` }}
              >
                &#9733;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
