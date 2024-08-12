import {
  // NEWIMAGE_UPLOAD,
  LOGIN,
  LOGOUT,
  // SET_HOME,
  OPEN_LOGIN_MODAL,
  SET_ADMIN_ID,
  SETPROFILE,
} from "./constant";
const initial_state = {
  all_hotels: [],
  email: "",
  isHome: true,
  token: "",
  password: "",
  mobile: "",
  organization_id: "",
  admin_id: "",
  role: " ",
  profile_img: "",
  mobileOpen: false,
  user_id: "",
  company_id: "",
  registration: [],
  loginModal: false,
  successfull: false,
  otpmodal: false,
  user_token: "",
  department_id: "",
  department_name: "",
  active: false,
  name: "",
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN:
      return (state = {
        ...state,
        isHome: false,
        token: action.payload.token,
        role: action.payload.role,
      });

    case LOGOUT:
      return (state = {
        ...state,
        isHome: true,
        token: "",
        role: "",
      });
    case SETPROFILE:
      return (state = {
        ...state,
        registration: action.payload.data,
      });
    // case SET_HOME:
    //   return state = { ...state, isHome: true };
    case OPEN_LOGIN_MODAL:
      return { ...state, loginModal: true };

    case SET_ADMIN_ID:
      return { ...state, admin_id: action.payload };

    default:
      return state;
  }
}
