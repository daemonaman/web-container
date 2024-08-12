import React, { Component } from "react";
import LayoutPage from "../components/Layout";
import { connect } from "react-redux";
import { viewCategories, setCatId } from "../action";
import { viewBanner } from "../../Images pages/action";
export class Controller extends Component {
  render() {
    return <LayoutPage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    banner: store.banner,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewCategories: () => {
      dispatch(viewCategories());
    },
    setCatId: (id) => {
      dispatch(setCatId(id));
    },
    viewBanner: () => {
      dispatch(viewBanner());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
