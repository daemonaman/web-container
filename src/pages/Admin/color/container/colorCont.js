import React, { Component } from "react";
import { connect } from "react-redux";
import Color from "../component/color";
import {
  close_snack_bar
} from "../../../../common/snackbar/action";
// import {
//   onLogout
// } from "../../../auth/actions";
import {
  createColor,
  updateColor,
  deleteColor,
  viewAllColor
} from "../action";
export class Controller extends Component {
  render() {
    return (
      <Color {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    // user: store.user
    all_color:store.all_color,
    // snack
    snackbar: store.snackbar,
    login: store.login,

  };
};
export const mapDispatchToProps = dispatch => {
  return {
    createColor: (color_name,color_code) => {
      dispatch(createColor(color_name,color_code))
    },
    updateColor: (_id,color_name,color_code) => {
      dispatch(updateColor(_id,color_name,color_code))
    },
    deleteColor: (_id) => {
      dispatch(deleteColor(_id))
    },
    viewAllColor: () => {
      dispatch(viewAllColor())
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);