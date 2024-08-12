import { VIEW_CATEGORIES_BY_ID, VIEW_PRODUCTBY_AGE } from "./constant";
const initial_state = {
  all_cat_praduct: [],
  all_praduct_by_age: [],
};

export default function categoriesreducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_PRODUCTBY_AGE:
      return {
        ...state,
        all_praduct_by_age: action.payload.data, // Access data property of payload
      };
    case VIEW_CATEGORIES_BY_ID:
      return {
        ...state,
        all_cat_praduct: action.payload.data, // Access data property of payload
      };

    default:
      return state;
  }
}
