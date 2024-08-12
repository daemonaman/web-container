import { ADD_ADDRESS, VIEW_ADDRESS, EDIT_ADDRESS } from "./Constant";

const initial_state = {
  all_address: [],
  loading: false, // Add loading state to manage loading status
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case VIEW_ADDRESS:
      return (state = { ...state, all_address: action.payload.data });
    default:
      return state;
    case ADD_ADDRESS:
      return {
        ...state,
        loading: true, // Set loading state to true when adding address
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        loading: true, // Set loading state to true when adding address
      };
  }
}
