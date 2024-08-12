import React, { Component } from "react";
import LayoutPage from "../Component/ShopbyAge";
import { connect } from "react-redux";
import { viewCategories, setAge } from "../action";

export class Controller extends Component {
  render() {
    return <LayoutPage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewCategories: () => {
      dispatch(viewCategories());
    },
    setAge: (id) => {
      dispatch(setAge(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
