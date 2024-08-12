import { SET_COLOR } from "./constant";
const initial_state = {
  all_color: [],
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_COLOR:
      return (state = { ...state, all_color: action.payload });
    // case SET_ONE_USER:
    //   return state = { ...state, one_user: action.payload };

    default:
      return state;
  }
}
