import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";
import { SET_DESCRIPTION, VIEW_CATEGORIES } from "./Constant";

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
export function viewDescription(payload) {
  console.log(payload);
  return {
    type: SET_DESCRIPTION,
    payload: payload,
  };
}

export function addToCart(token, productId) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status) {
          dispatch(viewCategories(token));
          dispatch(unsetLoader());
        } else {
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));
      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
      });
  };
}
