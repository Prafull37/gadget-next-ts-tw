import { useReducer } from 'react';
import { Product as ProductType } from '@/types/Product';

// Define action types
type Action =
  | { type: 'SET_PRODUCTS'; payload: ProductType[] }
  | { type: 'APPEND_PRODUCTS'; payload: ProductType[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_HAS_MORE'; payload: boolean }
  | { type: 'SET_TOTAL_LENGTH'; payload: number }
  | { type: 'RESET_PRODUCTS' };

// Initial state
const initialState = {
  products: [] as ProductType[],
  loading: false,
  hasMore: true,
  totalLength: 0,
};

// Reducer function
export function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'APPEND_PRODUCTS':
      return { ...state, products: [...state.products, ...action.payload] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_HAS_MORE':
      return { ...state, hasMore: action.payload };
    case 'SET_TOTAL_LENGTH':
      return { ...state, totalLength: action.payload };
    case 'RESET_PRODUCTS':
      return { ...state, products: [], hasMore: true, totalLength: 0 };
    default:
      return state;
  }
}

export default function useProductReducer(initialProducts: ProductType[]) {
  const [state, dispatch] = useReducer(reducer, initialState, (arg) => ({
    ...arg,
    products: initialProducts,
  }));

  return { ...state, dispatch };
}
