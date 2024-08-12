import React, { Component } from "react";
import NewNavbarpage from "../Component/NewNavbar";
import { connect } from "react-redux";
import { super_login, register_user, clear_login } from "../../../auth/actions";
import { onLogout } from "../../../auth/actions";
import LG from "../../../router/components/logout_btn";
import { close_snack_bar } from "../../../../src/common/snackbar/action";

export class Controller extends Component {
  render() {
    return <NewNavbarpage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};

export class LG_Cont extends Component {
  render() {
    return <LG {...this.props} />;
  }
}
export const mapDispatchToProps = (dispatch) => {
  return {
    clear_login: () => {
      dispatch(clear_login());
    },

    super_login: (email, password, type) => {
      dispatch(super_login(email, password, type));
    },

    register_user: (name, mobile, signUpemail, signUppassword) => {
      dispatch(register_user(name, mobile, signUpemail, signUppassword));
    },

    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },

    onLogout: () => {
      dispatch(onLogout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
