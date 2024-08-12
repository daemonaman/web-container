import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
// import { set_snack_bar } from "../../common/snackbar/action";
// import { getStorage,ref,uploadBytesResumable,getDownloadURL   } from "firebase/storage";
import "firebase/storage";
// import firebase from 'firebase/app'
import "firebase/storage";
import { set_snack_bar } from "../../common/snackbar/action";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { SET_PRODUCT_VIEW } from "./Constant";

export function ViewAllProducts() {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/getAllProds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //   Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log("asiillllllllllllla", responseJson.result.data);
        if (responseJson.status) {
          dispatch({
            type: SET_PRODUCT_VIEW,
            payload: { data: responseJson.result.data.result },
          });
          dispatch(set_snack_bar(true, responseJson.message));
          dispatch(unsetLoader());
        } else {
          dispatch({ type: SET_PRODUCT_VIEW, payload: { data: [] } });
          dispatch(set_snack_bar(true, responseJson.message));
          dispatch(unsetLoader());
        }
        dispatch(unsetLoader());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
