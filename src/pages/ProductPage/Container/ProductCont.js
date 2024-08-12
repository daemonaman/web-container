import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import { onLogout } from "../../../auth/actions";
import ProductView from "../Components/ProductPage";
import { view_product_all } from "../action";

export class Controller extends Component {
  render() {
    return <ProductView {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    all_product_user: store.all_admin_user,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    view_product_all: () => {
      dispatch(view_product_all());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
