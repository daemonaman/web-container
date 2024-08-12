import React, { Component } from "react";
import { connect } from "react-redux";
import { viewWishlist } from "../action";
import  MyWishlistPage  from "../components/MyWishlistPage";

export class Controller extends Component {
  render() {
    return <MyWishlistPage {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    login: store.login,
    wishlist:store.wishlist,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewWishlist:(token) => {
      dispatch(viewWishlist(token));
      // console.log(token);
    },
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
