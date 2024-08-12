import { SET_PRODUCT_USER } from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import "firebase/storage";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export function view_product_all() {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/user/getAllProds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch({ type: SET_PRODUCT_USER, payload: responseJson.result });
          dispatch(unsetLoader());
        } else {
          dispatch({ type: SET_PRODUCT_USER, payload: [] });
        }
        dispatch(unsetLoader());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
