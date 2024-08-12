import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import ProductView from "../Components/ProductView";
import { GetProductAll } from "../action";
export class Controller extends Component {
  render() {
    return <ProductView {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    products: store.viewProducts,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    GetProductAll: () => {
      dispatch(GetProductAll());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
