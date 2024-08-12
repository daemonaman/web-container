import { VIEW_BANNER } from "./constant";
const initial_state = {
    all_banner: []
};



export default function categoriesreducer(state = initial_state, action) {
    switch(action.type) {
        case VIEW_BANNER:
            return {
                ...state,
                all_banner: action.payload.data  // Access data property of payload
            };
        default:
            return state;
    }
}