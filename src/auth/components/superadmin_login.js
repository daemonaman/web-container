import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// import MenuItem from "@mui/material/MenuItem"
import Snackbar from "../../common/snackbar/components/snackbar";
// import logo1 from "../../pages/image/hy.png";
import "../styles/style.scss";
import "../styles/SignInForm.css";
import img from "../../Assets/kidztrynewlog.png";
import apple from "../../Assets/apple.svg";
import fb from "../../Assets/fb.svg";
import google from "../../Assets/google.svg";
import LoaderCon from "../../common/loader/containers/loader_cont";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "U",
      active: false,
      phone: "",
      showPassword: false,
      redirect: false,
    };
  }
  componentDidMount() {
    this.props.clear_login();
    // if (localStorage.getItem('socus_token') !== null) {
    //   return <Redirect to="/" />
    // }
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }
  render() {
    const {
      login,
      setEmail,
      setPwd,
      login_email,
      snackbar,
      close_snack_bar,
      super_login,
    } = this.props;

    if (login.user_id !== "") {
      return <Navigate to="/dashboard" />;
    }
    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }
    return (
      <div className="background-image-signin">
        <div className="background_image"></div>
        <div className="signin_container">
          <div className="logo_container">
            <img src={img} alt="Logo" />
          </div>
          <div className="signin_form">
            <h2 style={{ color: "#000" }}>Sign in</h2>

            <div className="form_group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                style={{ outline: "none" }}
              />
            </div>
            <div className="form_group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
                style={{ outline: "none" }}
              />
            </div>

            <div className="forgot_password">
              <p id="F-P">Forgot Password?</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <button
                onClick={() => {
                  super_login(
                    this.state.email,
                    this.state.password,
                    this.state.type
                  );
                  this.setState({ redirect: true });
                }}
                className="continue-button"
              >
                Continue
              </button>
            </div>

            <div className="divider-two">
              <hr /> <span>OR</span> <hr />
            </div>

            <div className="social-logins">
              <img src={google} alt="Google" />
              <img src={apple} alt="Apple" />
              <img src={fb} alt="Facebook" />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3px" }}>
              <Typography sx={{ fontSize: "13px", color: "#000" }}>New user?</Typography>
                <a href="/signup" style={{ color: "#4AA3DA",fontSize:"13px",letterSpacing:"1px" }}>
                  Create an account
                </a>   
            </div>

          </div>
          <LoaderCon />
          <Snackbar
            open={snackbar.response_received}
            close_snack_bar={close_snack_bar}
            message={snackbar.message}
          />
        </div>
      </div>
    );
  }
}
// class Login extends Component {
//     render(){
//         return(
//             <div>
//                 helloooooooooooooooooo
//             </div>
//         )
//     }
// }

export default Login;
