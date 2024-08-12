import { GET_PRODUCT_VIEW } from "./constant";

const initial_state = {
  all_view_Products: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_PRODUCT_VIEW:
      return (state = { ...state, all_view_Products: action.payload.data });
    default:
      return state;
  }
}
