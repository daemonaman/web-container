import React, { Component } from "react";
import { connect } from "react-redux";
import {updateprofile,viewProfile} from "../action";
import YourProfile from "../Componenets/YourProfile"
export class Controller extends Component {
  render() {
    return <YourProfile {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    categories: store.categories,
    login: store.login,
    profile:store.profile
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    viewProfile:(token,id) => {
      dispatch(viewProfile(token,id)); 
    },
    updateprofile:(id,   attachment,profile_name,number,gender,email,token)=>{
      dispatch(updateprofile(id,   attachment,profile_name,number,gender,email,token));
    }
    // updateprofile:(id,  editpreview, profile_name,number,gender,email,password,token)=>{
    //   dispatch(updateprofile(id,  editpreview,profile_name,number,gender,email,password,token));
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
