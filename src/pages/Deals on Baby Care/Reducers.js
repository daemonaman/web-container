import { SET_PRODUCT_VIEW } from "./Constant";
const initial_state = {
  all_product_view: [],
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_PRODUCT_VIEW:
      return (state = { ...state, all_product_view: action.payload.data });

    default:
      return state;
  }
}
