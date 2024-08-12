// import { ADD_ADDRESS } from "./Constant";
import { VIEW_ADDRESS } from "./Constant";
import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";

export function viewAddress(token) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/addresses", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(token)
        console.log("asiillllllllllllla", responseJson);
        if (responseJson.status) {
          dispatch({
            type: VIEW_ADDRESS,
            payload: {
              data: responseJson.result.data.result,
              count: responseJson.result.data.length,
            },
          });
          dispatch(set_snack_bar(true, "Data View Sucessfully"));
          dispatch(unsetLoader());
        } else {
          dispatch({ type: VIEW_ADDRESS, payload: { data: [], count: 0 } });
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

export function addAddress(
  token,
  fullname,
  phone,
  pincode,
  state,
  city,
  landmark,
  house_number
) {
  console.log(fullname, phone, pincode, state, city, landmark, house_number);
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/addresses/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        fullName: fullname,
        phoneNumber: phone,
        pinCode: pincode,
        state: state,
        city: city,
        landmark: landmark,
        houseNo: house_number,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(unsetLoader());
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

export function UpdateAddress(
  addressId,
  token,
  fullname,
  phone,
  pincode,
  state,
  city,
  landmark,
  house_number
) {
  console.log(
    token,
    fullname,
    phone,
    pincode,
    state,
    city,
    landmark,
    house_number
  );
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEURL + "user/addresses/" + addressId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        fullName: fullname,
        phoneNumber: phone,
        pinCode: pincode,
        state: state,
        city: city,
        landmark: landmark,
        houseNo: house_number,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          dispatch(viewAddress(token));
          dispatch(unsetLoader());
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
