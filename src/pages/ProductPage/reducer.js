import { SET_PRODUCT_USER } from "./constant";

const initial_state = {
  all_product_user: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_PRODUCT_USER:
      return (state = { ...state, all_product_user: action.payload });
    default:
      return state;
  }
}
