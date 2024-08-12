import { VIEW_WISHLIST } from "./constant";
const initial_state = {
    all_wishlist: [],
};
export default function wishlistreducer(state = initial_state, action) {
    switch(action.type) {
        case VIEW_WISHLIST:
            return {
                ...state,
                all_wishlist: action.payload.data
            };
        default:
            return state;
    }
}
