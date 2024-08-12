import { VIEW_CATEGORIES, SET_CAT_ID } from "./constant";
const initial_state = {
  all_categories: [],
  cat_id: "",
};

export default function categoriesreducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_CATEGORIES:
      return {
        ...state,
        all_categories: action.payload.data,
      };
    case SET_CAT_ID:
      return {
        ...state,
        cat_id: action.payload,
      };
    default:
      return state;
  }
}
