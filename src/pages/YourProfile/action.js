import { VIEW_PROFILE } from "./constant";
import "firebase/storage";
import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
export function viewProfile(token) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.BASEPROFILE + "/getUserProfile", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseJson) => {
        console.log("asiillllllllllllla", responseJson.result.data.result);
        if (responseJson.status) {
          dispatch({
            type: VIEW_PROFILE,
            payload: {
              data: responseJson.result.data.result,
            },
          });
          dispatch(set_snack_bar(true, "Data View Successfully"));
        } else {
          dispatch({ type: VIEW_PROFILE, payload: { data: [], count: 0 } });
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
export function updateprofile(
  id,
  // editpreview,
  attachment,
  profile_name,
  number,
  gender,
  email,
  
  token
) {
  console.log(id,
    // editpreview,
    attachment,
    profile_name,
    number,
    gender,
    email,
    
    token)
  return (dispatch) => {
    dispatch(setLoader(true));
    if (attachment === null) {
      dispatch(Update_Userprofile(
        id,
        attachment,
        // editpreview,
        profile_name,
        number,
        gender,
        email,

        token
      ))
    }
    else {
      const storageRef = ref(getStorage(), "/Userprofile/" + profile_name + ".png");
      const uploadTask = uploadBytesResumable(storageRef, attachment);
      uploadTask.on(
        "state_changed",
        function (snapshot) { },
        function (error) {
          console.log(error);
          dispatch(setLoader(false));
        },
        function () {
          getDownloadURL(uploadTask.snapshot.ref).then(function (attachment) {
            console.log(attachment);
            dispatch(
              Update_Userprofile(
                id,
                attachment,
                profile_name,     
                number,
                gender,
                email,
                
                token
              )
            );
          });
        }
      );
    }
  };
}
export function Update_Userprofile(
  id,
  attachment,
  profile_name,
  number,
  gender,
  email,
  
  token
) {
  console.log(id,
    attachment,
  profile_name,
  number,
  gender,
  email,
  
  token)
  return (dispatch) => {
    dispatch(setLoader());
    // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return fetch(UNIVERSAL.BASEURL + "user/update-user/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name: profile_name,
        number: number,
        gender: gender,
        profileImg: attachment,
        email:email,
        
      }),
    })
      .then((response) => response.json())

      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status) {
          // dispatch(viewCategories(token));
          // dispatch(set_snack_bar(responseJson.status, "OTP Sent Successfully"));
          dispatch(unsetLoader());
        } else {
          // alert("No Registration Found! Please Register First");
          // dispatch({ type: SET_USER, payload: [] })
          // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
        }
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, responseJson.message));
      })
      .catch((error) => {
        dispatch(unsetLoader());
        dispatch(set_snack_bar(true, "Check Your Internet Connection"));
        // console.error(error);
      });
  };
}