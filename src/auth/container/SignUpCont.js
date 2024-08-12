import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "../components/Signup";
import { register_user } from "../actions";
export class Controller extends Component {
  render() {
    return (
      <Signup {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    signUp: store.signUp,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    register_user: (name, email, password, mobile) => {
      dispatch(register_user(name, email, password, mobile));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);