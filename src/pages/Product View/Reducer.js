import { SET_CART_PRODUCT, SET_DESCRIPTION, VIEW_CATEGORIES } from "./Constant";

const initial_state = {
  all_categories: [],
  viewdescription: [],
  cart: [],
};

export default function categoriesreducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_CATEGORIES:
      return {
        ...state,
        all_categories: action.payload.data,
      };
    case SET_DESCRIPTION:
      return {
        ...state,
        viewdescription: action.payload,
      };
    case SET_CART_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
