import React, { Component } from "react";
import { AllSlidePage } from "../components/AllSlidePage";
import { connect } from "react-redux";
import { viewBanner } from "../action";

export class Controller extends Component {
  render() {
    return <AllSlidePage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    banner: store.banner,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewBanner:() => {
      dispatch(viewBanner());
      // console.log();
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);