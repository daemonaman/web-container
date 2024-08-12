import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import "firebase/storage";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import UNIVERSAL from "../../config/config";
import { GET_FILTER_AGE_PRODUCTS } from "./Constant";

export function ViewFilterAge() {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/view-products-ages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((responseJson) => {
        console.log("age asila", true);
        if (responseJson.status) {
          dispatch({
            type: GET_FILTER_AGE_PRODUCTS,
            payload: {
              data: responseJson.result.data.result,
              count: responseJson.result.data.length,
            },
          });
          dispatch(set_snack_bar(true, "age data filter all"));
          dispatch(unsetLoader());
        } else {
          dispatch({
            type: GET_FILTER_AGE_PRODUCTS,
            payload: { data: [], count: 0 },
          });
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
