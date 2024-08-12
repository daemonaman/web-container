import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import DealsOnCare from "../Components/DealsOnCare";
import { ViewAllProducts } from "../Action";
export class Controller extends Component {
  render() {
    return <DealsOnCare {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    products: store.products,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    ViewAllProducts: () => {
      dispatch(ViewAllProducts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
