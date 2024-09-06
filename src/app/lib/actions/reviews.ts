'use server';
import { ReviewFormSchemaType, reviewSchema } from '@/schema/review.schema';
import { getDataFromFile, writeDataToFile } from './general';
import path from 'path';
import { generateUUID } from '@/utils/common.utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const reviewPath = path.resolve(__dirname, '/src/json/review.json');

//except review ,rating,only
export async function addReviews(productId: string, formBody: FormData) {
  const header = headers();
  console.log('productid,', productId, formBody);
  // try {
  //   const id = generateUUID();
  //   const user = header.get('user') || 'Sample User';
  //   const userId = header.get('userId');
  //   const formData = reviewSchema.parse({
  //     id,
  //     ...formBody,
  //     user,
  //     userId,
  //     productId,
  //   });

  //   getDataFromFile(reviewPath, (data) => {
  //     const allReviews: { reviews: ReviewFormSchemaType[] } = JSON.parse(data);
  //     allReviews.reviews.push({ ...formData, id });
  //     writeDataToFile(reviewPath, JSON.stringify(data), (err) => {
  //       if (err) {
  //         throw new Error(err);
  //       }

  //       revalidatePath(`${formData.product_id}/reviews`);
  //       redirect(`${formData.product_id}/reviews/all`);
  //     });
  //   });
  // } catch (e) {
  //   //@ts-expect-error any
  //   throw new Error(e);
  // }
}
