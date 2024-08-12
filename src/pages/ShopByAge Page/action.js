import { VIEW_CATEGORIES, SET_AGE } from "./constant";
import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";
export function viewCategories() {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/categories", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseJson) => {
        // console.log("asiillllllllllllla", responseJson.result.data);
        if (responseJson.status) {
          dispatch({
            type: VIEW_CATEGORIES,
            payload: {
              data: responseJson.result.data.categories,
              count: responseJson.result.data.length,
            },
          });
          dispatch(set_snack_bar(true, "Data View Successfully"));
        } else {
          dispatch({ type: VIEW_CATEGORIES, payload: { data: [], count: 0 } });
          dispatch(set_snack_bar(true, responseJson.message));
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(set_snack_bar(true, "An error occurred while fetching data"));
      })
      .finally(() => {
        dispatch(unsetLoader());
      });
  };
}
export function setAge(payload) {
  return {
    type: SET_AGE,
    payload: payload,
  };
}
