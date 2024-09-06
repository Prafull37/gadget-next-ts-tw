import { TextInputWithLabel } from '@/components/atoms/Input';
import Card from '../../components/Card/Card';
import { TextAreaWithLabel } from '@/components/atoms/TextArea';
import Button from '@/components/atoms/Button';
import { useActionState } from 'react';
import { addReviews } from '@/server/actions/reviews';
import Rating from '@/components/atoms/Rating';

type CreateNewReviewProps = {
  productId: string;
};

export default async function CreateReview(props: CreateNewReviewProps) {
  const { productId } = props;

  const onFormSubmit = async (data: FormData) => {
    'use server';
    console.info('data', data);
  };
  return (
    <div>
      <Card>
        <div>
          <h3 className="text-lg font-semibold mb-2">Submit Your Ratings</h3>

          <Rating />
        </div>
      </Card>
      <Card>
        <div>
          <h3 className="text-lg font-semibold mb-2">Add Your Review</h3>
          <form action={onFormSubmit}>
            <label htmlFor="userName">Name</label>
            <input type="text" name="userName" id="userName" />
            <label htmlFor="userName">Password</label>
            <input type="password" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Card>
    </div>
  );
}
