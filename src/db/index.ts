import _keyBy from 'lodash/keyBy';
import _groupBy from 'lodash/groupBy';

import _slice from 'lodash/slice';
import _values from 'lodash/values';
import _filter from 'lodash/filter';

import products from '@/json/datas/products.json';
import categories from '@/json/datas/categories.json';
import reviews from '@/json/datas/reviews.json';

import { Product } from '@/types/Product';
import { Review } from '@/types/Review';

//TODO:fix more on type

class Products {
  products: Record<string, any>;
  constructor() {
    this.products = _keyBy(products.products, 'id');
  }
  getAll() {
    return this.products;
  }
  getByCategoryId(categoryId: string) {
    return _keyBy(
      _filter(_values(this.products), { category_id: categoryId }),
      'id'
    );
  }
  getById(id: string) {
    return this.products[id];
  }
  getProductsPagination(data: Array<Product>, offset = 0, limit = 50) {
    return data.slice(offset, offset + limit);
  }
}

export const productDb = new Products();

//TODO:fix more on type

class Category {
  categories: Record<string, any>;
  constructor() {
    this.categories = _keyBy(categories.categories, 'id');
  }

  getById(id: string) {
    return this.categories[id];
  }

  getAll(): Record<string, Category> {
    return this.categories;
  }
}

export const categoryDb = new Category();

class Reviews {
  reviews: Array<Review>;
  reviewsById: Record<string, Review>;
  reviewsByProductId: Record<string, Review>;

  constructor() {
    this.reviews = reviews.reviews;
    this.reviewsById = _keyBy(this.reviews, 'id');
    this.reviewsByProductId = _groupBy(this.reviews, 'product_id');
  }

  getReviewsByProductId(id: string) {
    return this.reviewsByProductId[id];
  }

  getReviewById(id: string): Record<string, Category> {
    return this.reviewsById[id];
  }
}

export const reviewDb = new Reviews();
