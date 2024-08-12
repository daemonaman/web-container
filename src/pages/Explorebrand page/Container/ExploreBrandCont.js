import React, { Component } from "react";
import { connect } from "react-redux";
// import { ExploreBrandPage } from "../Components/ExploreBrandPage";
import { ViewBrands } from "../Action";
import ExploreBrandPage from "../Components/ExploreBrandPage";
export class Controller extends Component {
  render() {
    return <ExploreBrandPage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    brand: store.brand,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    ViewBrands: () => {
      dispatch(ViewBrands());
    },
  };
}; 
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
