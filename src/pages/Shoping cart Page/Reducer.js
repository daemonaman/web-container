import {  VIEW_CART_PRODUCT } from "./constant";

const initial_state = {
  view_all_cart_product: [],
  loading: false, 
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_CART_PRODUCT:
      return (state = { ...state,view_all_cart_product: action.payload.data });
    default:
      return state;
  }
}
