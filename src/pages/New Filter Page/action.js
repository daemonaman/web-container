import { VIEW_CATEGORIES_BY_ID, VIEW_PRODUCTBY_AGE } from "./constant";
import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";
import { SET_DESCRIPTION } from "../Product View/Constant";

export function viewCatergoriesById(catName) {
  return (dispatch) => {
    dispatch(setLoader());
    //   return fetch(`${UNIVERSAL.BASEURL}/user/banners/${bannerId}`, {
    return fetch(UNIVERSAL.BASEURL + "user/getAllProdsByCat", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        catName: catName,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("hmmmmmmmmmmmmmmmm", responseJson.result.data);
        if (responseJson.status) {
          dispatch({
            type: VIEW_CATEGORIES_BY_ID,
            payload: {
              data: responseJson.result.data.result,
            },
          });
          dispatch(set_snack_bar(true, "Data View Successfully"));
        } else {
          dispatch({
            type: VIEW_CATEGORIES_BY_ID,
            payload: { data: [], count: 0 },
          });
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
export function ViewProductbyAge(age) {
  return (dispatch) => {
    dispatch(setLoader());
    //   return fetch(`${UNIVERSAL.BASEURL}/user/banners/${bannerId}`, {
    return fetch(UNIVERSAL.BASEURL + "user/view-products-ages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseJson) => {
        // console.log("hmmmmmmmmmmmmmmmmasilllll", responseJson.result.data);
        if (responseJson.status) {
          dispatch({
            type: VIEW_PRODUCTBY_AGE,
            payload: {
              data: responseJson.result.data.result,
            },
          });
          dispatch(set_snack_bar(true, "Data View Successfully"));
        } else {
          dispatch({
            type: VIEW_PRODUCTBY_AGE,
            payload: { data: [], count: 0 },
          });
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
