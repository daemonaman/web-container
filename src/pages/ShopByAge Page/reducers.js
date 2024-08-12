import { VIEW_CATEGORIES, SET_AGE } from "./constant";
const initial_state = {
  all_categories: [],
  age: "",
};

export default function categoriesreducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_CATEGORIES:
      return {
        ...state,
        all_categories: action.payload.data, // Access data property of payload
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload, // Access data property of payload
      };
    default:
      return state;
  }
}
