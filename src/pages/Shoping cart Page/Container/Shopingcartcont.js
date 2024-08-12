import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import { viewCartProduct } from "../action";
import { ShoppingcartPage } from "../Component/ShoppingcartPage";
export class Controller extends Component {
  render() {
    return <ShoppingcartPage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    viewshoppingcart: store.viewshoppingcart,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    viewCartProduct: (token) => {
      dispatch(viewCartProduct(token));
      console.log(token);
    },  
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
