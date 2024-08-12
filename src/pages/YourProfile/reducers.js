import { VIEW_PROFILE } from "./constant";
const initial_state = {
    all_profile: []
};



export default function profilereducer(state = initial_state, action) {
    switch(action.type) {
        case VIEW_PROFILE:
            return {
                ...state,
                all_profile: action.payload.data
            };
        default:
            return state;
    }
}