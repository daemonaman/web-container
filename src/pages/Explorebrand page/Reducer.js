import { VIEW_BRAND_ALL } from "../FocusonPage/Constant";
const initial_state = {
  all_view_brand: [],
};

export default function brandreducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_BRAND_ALL:
      return {
        ...state,
        all_view_brand: action.payload.data,
      };
    default:
      return state;
  }
}
