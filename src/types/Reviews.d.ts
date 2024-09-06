export type Review = {
  id: string;
  product_id: string;
  user_id?: string;
  user: string;
  rating: number;
  review?: string;
  date: string;
};
