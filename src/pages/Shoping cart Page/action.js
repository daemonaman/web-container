import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";
import { VIEW_CART_PRODUCT } from "./constant";



export function viewCartProduct(token) {
    return async (dispatch) => {
      dispatch(setLoader());
      return fetch(
        UNIVERSAL.BASEURL  +
          "user/cart-products",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
   
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("asiillllllllllllla", responseJson);
          if (responseJson.status) {
            dispatch({
              type: VIEW_CART_PRODUCT,
              payload: {
                data: responseJson.result.data.result,
           
              },
            });
            dispatch(set_snack_bar(true, responseJson.message));
            dispatch(unsetLoader());
          } else {
            dispatch({ type: VIEW_CART_PRODUCT, payload: { data: [], count: 0 } });
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
  