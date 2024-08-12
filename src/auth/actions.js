import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  // NEWIMAGE_UPLOAD,
  HANDLEDRAWER,
  // SET_HOME,
  // SET_EMAIL,
  // SET_PASSWORD,
  CLEAR_LOGIN,
  SET_ADMIN_ID,
  SETPROFILE,
  // REGISTRATION,
  // SUCESSFUL,
  // VERIFY_OTP,
  // SUPERLOGIN,
  // ADMINLOGIN,
  // SETALL,
  // ALL_HOTELS,
  // TOURISMLOGIN,
  // SETACTIVE
} from "./constant";
import UNIVERSAL from "../config/config";
import { setLoader, unsetLoader } from "../common/loader/action";
import { set_snack_bar } from "../common/snackbar/action";
// import { redirect} from "react-router-dom"
// import { RedirectFunction } from "react-router-dom";
// import firebase from "firebase"

export function super_login(email, password) {
  console.log(email, password)
  return async (dispatch) => {
    dispatch(setLoader());
    try {
      const response = await fetch(UNIVERSAL.BASEURL + "user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
          // type: "U",
        }),
      });
      const responseJson = await response.json();
      console.log("asilllllll", responseJson.result.data.result[0].token);
      if (responseJson.status) {
        dispatch(setAdminLogin(responseJson.result.data.result[0]));
        dispatch({
          type: SETPROFILE,
          payload: { data: responseJson.result.data.result[0]},
        });
        dispatch(setAdminId(responseJson.result.data.result[0].token));
        dispatch(set_snack_bar(responseJson.status, "Login Successfully"));
      } else {
        dispatch(set_snack_bar(responseJson.status, "Invalid User"));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(unsetLoader());
    }
  };
}
export function clear_login() {
  return {
    type: CLEAR_LOGIN,
  };
}
export function setAdminId(payload) {
  return {
    type: SET_ADMIN_ID,
    payload: payload,
  };
}

export function setAdminLogin(payload) {
  console.log(payload);
  localStorage.setItem("token", payload.token);
  localStorage.setItem("role", payload.role);

  return {
    type: LOGIN,
    payload: payload,
  };
}

export function handleDrawerToggle(mobileOpen) {
  mobileOpen = !mobileOpen;
  return {
    type: HANDLEDRAWER,
    payload: mobileOpen,
  };
}
export function onLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");

  return {
    type: LOGOUT,
  };
}

export function register_user(name, email, password, mobile) {
  console.log(name, email, password, mobile);
  return async (dispatch) => {
    dispatch(setLoader());
    try {
      const response = await fetch(UNIVERSAL.BASEURL + "user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          mobileNumber: mobile,
        }),
      });
      const responseJson = await response.json();
      console.log("asilllllll", responseJson);
      if (responseJson.status) {
        // dispatch(setAdminLogin(responseJson.result.data));

        // dispatch(setAdminId(responseJson.result.data.token));
        dispatch(set_snack_bar(responseJson.status, "Register Successfully"));
      } else {
        dispatch(set_snack_bar(responseJson.status, "Invalid User"));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(unsetLoader());
    }
  };
}
