import { GET_FILTER_AGE_PRODUCTS } from "./Constant";

const initial_state = {
  all_filterage_products: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_FILTER_AGE_PRODUCTS:
      return (state = {
        ...state,
        all_filterage_products: action.payload.data,
      });
    default:
      return state;
  }
}
