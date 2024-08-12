import React, { Component } from "react";
import { connect } from "react-redux";
import { viewCategories, viewDescription, addToCart } from "../Action";
import ProductAllView from "../Components/ProductView";

export class Controller extends Component {
  render() {
    return <ProductAllView {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    descrption: store.descrption,
    cart: store.cart,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewCategories: () => {
      dispatch(viewCategories());
    },
    viewDescription: (id) => {
      dispatch(viewDescription(id));
    },
    addToCart: (id, token) => {
      dispatch(addToCart(id, token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
