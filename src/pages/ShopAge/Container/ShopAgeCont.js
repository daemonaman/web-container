import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import { ViewFilterAge } from "../action";
import ShopAge from "../Components/ShopAge";
export class Controller extends Component {
  render() {
    return <ShopAge {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    age: store.age,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    ViewFilterAge: () => {
      dispatch(ViewFilterAge());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
