// priceReducer.ts

import { Range } from '../components/category/Price';

// Define Action Types
export const SET_PRICE_RANGE = 'SET_PRICE_RANGE';

// Define Action Creator Function
export const setPriceRange = (range: Range) => {
  return {
    type: SET_PRICE_RANGE,
    payload: range,
  };
};

// Define Action Interface
interface SetPriceRangeAction {
  type: typeof SET_PRICE_RANGE;
  payload: Range;
}

// Define State Interface
interface PriceState {
  priceRange: Range;
}

// Define Initial State
const initialState: PriceState = {
  priceRange: { min: 0, max: 200 },
};

// Define Reducer Function
const priceReducer = (state = initialState, action: SetPriceRangeAction): PriceState => {
  switch (action.type) {
    case SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    default:
      return state;
  }
};

export default priceReducer;
