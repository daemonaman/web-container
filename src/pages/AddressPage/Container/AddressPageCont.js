import React, { Component } from "react";
import { connect } from "react-redux";
import AddressPage from "../Components/AddressPage";
import { close_snack_bar } from "../../../common/snackbar/action";
import { UpdateAddress, addAddress, viewAddress } from "../Action";
export class Controller extends Component {
  render() {
    return <AddressPage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    address: store.address,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },

    viewAddress: (token) => {
      dispatch(viewAddress(token));
      console.log(token);
    },

    addAddress: (
      token,
      fullname,
      phone,
      pincode,
      state,
      city,
      landmark,
      house_number
    ) => {
      dispatch(
        addAddress(
          token,
          fullname,
          phone,
          pincode,
          state,
          city,
          landmark,
          house_number
        )
      );
    },

    UpdateAddress: (
      addressId,
      token,
      fullname,
      phone,
      pincode,
      state,
      city,
      landmark,
      house_number
    ) => {
      dispatch(
        UpdateAddress(
          addressId,
          token,
          fullname,
          phone,
          pincode,
          state,
          city,
          landmark,
          house_number
        )
      );
      console.log(
        addressId,
        token,
        fullname,
        phone,
        pincode,
        state,
        city,
        landmark,
        house_number
      );
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
