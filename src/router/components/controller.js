import React, { Component } from "react";
// import firebase from "firebase";
// import { firebase_config } from "../../constants/ActionTypes";

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      page: ""
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem("user_id"))
    if (localStorage.getItem("user_id") !== null) {
      console.log(localStorage.getItem("type"))
     
        // console.log(localStorage.getItem("type"));
        
        this.props.setAdminLogin({
          _id:localStorage.getItem("user_id"),
          type:localStorage.getItem("type"),
          name:localStorage.getItem("name"),
          email:localStorage.getItem("email"),
        });
      

      // if (!firebase.apps.length) {
      //   firebase.initializeApp(firebase_config);
      // }
    }
  }

  render() {
    return (
      <div />
    );
  }
}
