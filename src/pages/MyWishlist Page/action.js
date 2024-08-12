import { VIEW_WISHLIST } from "./constant";
import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";

export function viewWishlist(token) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "/wishlist/{userName}", {
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
            type: VIEW_WISHLIST,
            payload: {
              data: responseJson.result.data.wishlist,
              count: responseJson.result.data.length,
            },
          });
          dispatch(set_snack_bar(true, "Data View Successfully"));
        } else {
          dispatch({ type: VIEW_WISHLIST, payload: { data: [], count: 0 } });
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
