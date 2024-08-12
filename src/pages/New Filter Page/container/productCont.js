import React, { Component } from "react";
import { FilterCard } from "../components/FilterPageCard";
import { connect } from "react-redux";
import { viewCatergoriesById } from "../action";
import { viewDescription } from "../../Product View/Action";
export class Controller extends Component {
  render() {
    return <FilterCard {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    allfilterproduct: store.allfilterproduct,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewCatergoriesById: (id) => {
      dispatch(viewCatergoriesById(id));
    },
    viewDescription: (id) => {
      dispatch(viewDescription(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
