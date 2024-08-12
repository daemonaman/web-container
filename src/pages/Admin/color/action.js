import { SET_COLOR } from "./constant";
import UNIVERSAL from "../../../config/config";
import { setLoader, unsetLoader } from "../../../common/loader/action";
import { set_snack_bar } from "../../../common/snackbar/action";
// import { set_snack_bar } from "../../common/snackbar/action";
// import { getStorage,ref,uploadBytesResumable,getDownloadURL   } from "firebase/storage";
import "firebase/storage";
// import firebase from 'firebase/app'

export function createColor(color_name, color_code) {
  return (dispatch) => {
    dispatch(setLoader());
    // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return fetch(UNIVERSAL.BASEURL + "add_color", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color_name: color_name,
        color_code: color_code,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status) {
          dispatch(viewAllColor());
        } else {
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));
      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
        console.error(error);
      });
  };
}

export function updateColor(_id, color_name, color_code) {
  return (dispatch) => {
    dispatch(setLoader());
    // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return fetch(UNIVERSAL.BASEURL + "update_color", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: _id,
        color_name: color_name,
        color_code: color_code,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(viewAllColor());
          // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
          dispatch(unsetLoader());
        } else {
          // alert("No Registration Found! Please Register First");
          // dispatch({ type: SET_USER, payload: [] })
          // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));
      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
        console.error(error);
      });
  };
}

export function deleteColor(_id) {
  return (dispatch) => {
    dispatch(setLoader());
    // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return fetch(UNIVERSAL.BASEURL + "delete_color", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: _id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(viewAllColor());
          // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
          dispatch(unsetLoader());
        } else {
          // alert("No Registration Found! Please Register First");
          // dispatch({ type: SET_USER, payload: [] })
          // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));
      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
        console.error(error);
      });
  };
}

export function viewAllColor() {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "view_all_color", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          // dispatch(setuser(responseJson.result));
          dispatch({ type: SET_COLOR, payload: responseJson.result });
          // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
          dispatch(unsetLoader());
        } else {
          // alert("No Registration Found! Please Register First");
          dispatch({ type: SET_COLOR, payload: [] });
          // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
        }
        dispatch(unsetLoader());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
