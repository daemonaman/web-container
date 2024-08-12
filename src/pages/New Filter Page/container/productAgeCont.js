import React, { Component } from "react";
import ProductbyAge from "../components/ProductbyAge";
import { connect } from "react-redux";
import { ViewProductbyAge } from "../action";

export class Controller extends Component {
  render() {
    return <ProductbyAge {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    allfilterproduct: store.allfilterproduct,
    age: store.age,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    ViewProductbyAge: (age) => {
      dispatch(ViewProductbyAge(age));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
