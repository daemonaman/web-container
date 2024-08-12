import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import "firebase/storage";
import "firebase/storage";
import { set_snack_bar } from "../../common/snackbar/action";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import { GET_PRODUCT_VIEW } from "./constant";

export function GetProductAll() {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/getAllProds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          dispatch({
            type: GET_PRODUCT_VIEW,
            payload: { data: responseJson.result.data.result },
          });
          dispatch(set_snack_bar(true, responseJson.message));
          dispatch(unsetLoader());
        } else {
          dispatch({ type: GET_PRODUCT_VIEW, payload: { data: [] } });
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
