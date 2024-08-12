import React, { useState } from "react";
import Lgo from "../../../Assets/kidztrynewlog.png";
import { CiSearch } from "react-icons/ci";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  ClickAwayListener
} from "@mui/material"; // Import necessary Material-UI components
import img from "../../../Assets/kidz.png";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import apple from "../../../Assets/apple.svg";
import fb from "../../../Assets/fb.svg";
import google from "../../../Assets/google.svg";
import { FaRegHeart } from "react-icons/fa";
import { HiShoppingBag, HiOutlineShoppingBag } from "react-icons/hi";
import Avatar from "@mui/material/Avatar";
import "../Styles/NewNavbar.css";
import { MainNavbar } from "../../MainNavbar Page/MainNavbar";
import { AiOutlineUser } from "react-icons/ai";
import { TfiWallet } from "react-icons/tfi";
import { TbMenuOrder } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";
import { FcOnlineSupport } from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";
import { LuPackageOpen } from "react-icons/lu";
import { TfiPackage } from "react-icons/tfi";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { RiArrowDropDownLine } from "react-icons/ri";

import Login from "../../../auth/components/superadmin_login";

const NewNavbarpage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickAway = () => {
    handleMenuClose();
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const mouseclose = () => {
    setOpenDialog(false);
  };
  const handleLogout = () => {
    // Perform logout action
    props.onLogout();
    handleMenuClose();
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [signUpemail, setsignUpEmail] = useState("");
  const [signUppassword, setsignUpPassword] = useState("");
  const [name, setName] = useState("");

  const [mobile, setMobile] = useState("");

  const [opensignUpDialog, setOpensignUpDialog] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    "Search for a Brand, Category, or Product..."
  );

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Search for a Brand, Category Or Product...");
  };

  const handleOpensignUpDialog = () => {
    setOpensignUpDialog(true);
  };

  const handlesignUpCloseDialog = () => {
    setOpensignUpDialog(false);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isProductLinkActive, setProductLinkActive] = useState(false);
  const [isCartLinkActive, setCartLinkActive] = useState(false);
  const handleProductLinkClick = () => {
    setProductLinkActive(true);
    setCartLinkActive(false);
  };

  const handleCartLinkClick = () => {
    setCartLinkActive(true);
    setProductLinkActive(false);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleRegister = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!mobile.match(/^\d{10}$/)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="main-navtwo">
        <div className="log-search">
          <div>
            {" "}
            <Link to="/">
              <img src={Lgo} alt="Kidzryz" style={{ height: "3rem" }} />
            </Link>
          </div>

          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div>
        </div>
        <div className="icons">
          <div>
            {props.login.isHome === true && (
              <Link to="/wishlist">
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="35"
                    height="40"
                    viewBox="0 0 38 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.8"
                      d="M32.9797 21.2875L32.9644 21.3041L32.9496 21.3212C31.4969 22.995 28.2438 25.6655 25.1792 28.0509C23.6708 29.225 22.2464 30.3011 21.1691 31.1142L21.0838 31.1786C20.5844 31.5555 20.1595 31.8763 19.8443 32.1179C19.6782 32.2451 19.5352 32.3561 19.4244 32.4448L19.4153 32.4521C19.3893 32.4728 19.3526 32.5022 19.3111 32.5369C19.1865 32.6031 19.1001 32.6462 19.0226 32.6777C19.0143 32.6811 19.0068 32.684 19 32.6866C18.9932 32.684 18.9857 32.6811 18.9774 32.6777C18.9006 32.6465 18.8151 32.6039 18.6923 32.5386C18.6538 32.5061 18.6196 32.4783 18.5945 32.4578L18.5864 32.4512C18.4764 32.3615 18.334 32.2486 18.1679 32.1186C17.8348 31.8578 17.3797 31.507 16.8425 31.0932L16.6968 30.981C15.6373 30.165 14.271 29.1127 12.8272 27.9763C9.76481 25.5658 6.48993 22.8813 5.02026 21.2875C1.87026 17.8714 1.5 14.0817 1.5 11.4708C1.5 5.82834 5.82026 1.5 10.5773 1.5C13.5319 1.5 16.2231 3.09932 17.9432 5.7108L19.1959 7.61271L20.4486 5.7108C22.1884 3.06927 24.8911 1.5 27.4227 1.5C32.3583 1.5 36.5 5.80972 36.5 11.4708C36.5 14.0817 36.1297 17.8714 32.9797 21.2875Z"
                      stroke="#0B0B0B"
                      strokeWidth="3"
                    />
                  </svg>
                  {/* <span>Shortlist</span> */}
                </div>
              </Link>
            )}
          </div>
          <div>
            {props.login.isHome === true ? (
              <Link
              to="/login"
              style={{ color: isCartLinkActive ? "blue" : "black" }}
            >
              <Badge badgeContent={0}  sx={{
          '& .MuiBadge-badge': {
            backgroundColor: 'red',
            color: 'white'
          }
        }}>
                <svg
                  width="38"
                  height="35"
                  viewBox="0 0 38 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      d="M27.1623 10.1433C27.1623 5.64596 23.5165 2.00007 19.0191 2.00007C16.8535 1.99097 14.7733 2.84485 13.2387 4.37298C11.7041 5.90112 10.8415 7.97761 10.8415 10.1433M26.9035 38.2303H11.1693C5.38969 38.2303 0.955813 36.1427 2.21524 27.7408L3.6817 16.3542C4.45806 12.1618 7.13219 10.5574 9.47852 10.5574H28.6632C31.0441 10.5574 33.5629 12.2826 34.4601 16.3542L35.9265 27.7408C36.9962 35.1938 32.6831 38.2303 26.9035 38.2303Z"
                      stroke="#0B0B0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.6083 18.6318H24.5234"
                      stroke="#0B0B0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.6197 18.6318H13.533"
                      stroke="#0B0B0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Badge>
            </Link>
            ) : (
              <Link
                to="/shoppingcart"
                style={{ color: isCartLinkActive ? "blue" : "black" }}
                onClick={handleCartLinkClick}
              >
               <Badge badgeContent={1}  sx={{
          '& .MuiBadge-badge': {
            backgroundColor: 'red',
            color: 'white'
          }
        }}>
                <svg
                  width="32"
                  height="25"
                  viewBox="0 0 38 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M27.1623 10.1433C27.1623 5.64596 23.5165 2.00007 19.0191 2.00007C16.8535 1.99097 14.7733 2.84485 13.2387 4.37298C11.7041 5.90112 10.8415 7.97761 10.8415 10.1433M26.9035 38.2303H11.1693C5.38969 38.2303 0.955813 36.1427 2.21524 27.7408L3.6817 16.3542C4.45806 12.1618 7.13219 10.5574 9.47852 10.5574H28.6632C31.0441 10.5574 33.5629 12.2826 34.4601 16.3542L35.9265 27.7408C36.9962 35.1938 32.6831 38.2303 26.9035 38.2303Z"
                      stroke="#0B0B0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.6083 18.6318H24.5234"
                      stroke="#0B0B0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.6197 18.6318H13.533"
                      stroke="#0B0B0B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Badge>
              </Link>
            )}
          </div>
          {/* <div> <img src={img} alt="" onClick={toggleDropdown}/></div> */}
          {props.login.isHome === false ? (
            // <Avatar
            //   style={{ height: "37px", width: "38px" }}
            //   alt="Tarana"
            //   src=""
            //   onClick={handleMenuOpen}
            // >
            //   T
            // </Avatar>
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <span
        onMouseOver={handleMenuOpen}
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        My Account
        <RiArrowDropDownLine
          style={{ marginTop: "4px", marginLeft: "2px" }}
        />
      </span>
            </div>
          ) : (
            <Link to="/login">
              <Button className="buttton-login">Login</Button>
            </Link>
          )}
          <ClickAwayListener onClickAway={handleClickAway}>
        <div className="drop_down">
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              marginLeft: "-3rem",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            <List>
              <Link to="/yourprofile">
                <ListItem button onClick={handleMenuClose}>
                  <ListItemIcon>
                    <AiOutlineUser
                      style={{ fontSize: "25px", fill: "#02A6E2" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Your Profile"
                    dense={true}
                    style={{ marginLeft: "-18px" }}
                  />
                </ListItem>
              </Link>
              <Link to="/wallet">
                <ListItem button onClick={handleMenuClose}>
                  <ListItemIcon>
                    <TfiWallet
                      style={{ fontSize: "25px", fill: "#02A6E2" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Wallet"
                    style={{ marginLeft: "-18px" }}
                  />
                </ListItem>
              </Link>
              <Link to="/orders">
                <ListItem button onClick={handleMenuClose}>
                  <ListItemIcon>
                    <TfiPackage
                      style={{ fontSize: "25px", fill: "#02A6E2" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Orders"
                    style={{ marginLeft: "-18px" }}
                  />
                </ListItem>
              </Link>
              <Link to="/coupons">
                <ListItem button onClick={handleMenuClose}>
                  <ListItemIcon>
                    <BiSolidCoupon
                      style={{ fontSize: "25px", fill: "#02A6E2" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Coupons"
                    style={{ marginLeft: "-18px" }}
                  />
                </ListItem>
              </Link>
              <Link to="/help">
                <ListItem button onClick={handleMenuClose}>
                  <ListItemIcon>
                    <MdOutlineContactSupport
                      style={{ fontSize: "25px", fill: "#02A6E2" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Support"
                    style={{ marginLeft: "-18px" }}
                  />
                </ListItem>
              </Link>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <IoMdLogOut style={{ fontSize: "25px", fill: "#02A6E2" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  style={{ marginLeft: "-18px" }}
                />
              </ListItem>
            </List>
          </Menu>
        </div>
      </ClickAwayListener>
        </div>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          sx={{
            "& .MuiDialog-paper": {
              width: "400px",
              height: "auto",
            },
            "& .MuiDialogContent-root": {},
          }}
        >
          <div className="background-image"></div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="logo-container" style={{ marginLeft: "20%" }}>
              <img src={img} alt="Logo" />
            </div>
            <div style={{ paddingLeft: "60px", paddingTop: "10px" }}>
              <DialogActions>
                <Button
                  onClick={handleCloseDialog}
                  startIcon={<CloseIcon />}
                ></Button>
              </DialogActions>
            </div>
          </div>

          <DialogContent>
            <div className="signin-form">
              <h2>Sign In</h2>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="forgot-password">
                <p style={{ fontSize: "13px" }}>Forgot Password?</p>
              </div>
              <button
                className="common-button"
                onClick={() => {
                  props.super_login(email, password, "U");
                }}
              >
                Sign In
              </button>

              <div className="divider">
                <hr /> <span>or</span> <hr />
              </div>

              <div className="social-logins">
                <img src={google} alt="Google" />
                <img src={apple} alt="Apple" />
                <img src={fb} alt="Facebook" />
              </div>

              <p>
                Don't have an account?
                <Button
                  className="common-button"
                  onClick={() => {
                    handleCloseDialog();
                    handleOpensignUpDialog();
                  }}
                >
                  Sign Up
                </Button>
              </p>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={opensignUpDialog} onClose={handlesignUpCloseDialog}>
          <div className="signup-container">
            <div className="background-image"></div>
            <div
              className="logo-container"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img src={img} alt="Logo" />
            </div>
            <div style={{ paddingLeft: "60px", paddingTop: "10px" }}>
              <DialogActions>
                <Button
                  onClick={handleCloseDialog}
                  startIcon={<CloseIcon />}
                ></Button>
              </DialogActions>
            </div>

            <DialogContent>
              <div className="signup-form">
                <h2>Create Account</h2>

                <div className="input-field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "390px",
                      height: "40px",
                      padding: "7px",
                      marginBottom: "15px",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "1px solid #cbcbcb",
                      fontSize: "16px",
                    }}
                    required
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobile"
                    pattern="\d{10}"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    style={{
                      width: "390px",
                      height: "40px",
                      padding: "7px",
                      marginBottom: "15px",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "1px solid #cbcbcb",
                      fontSize: "16px",
                    }}
                    required
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={signUpemail}
                    onChange={(e) => setsignUpEmail(e.target.value)}
                    style={{
                      width: "390px",
                      height: "40px",
                      padding: "7px",
                      marginBottom: "15px",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "1px solid #cbcbcb",
                      fontSize: "16px",
                    }}
                    required
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    minLength="6"
                    value={signUppassword}
                    onChange={(e) => setsignUpPassword(e.target.value)}
                    style={{
                      width: "390px",
                      height: "40px",
                      padding: "7px",
                      marginBottom: "15px",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "1px solid #cbcbcb",
                      fontSize: "16px",
                    }}
                    required
                  />
                </div>

                <button
                  onClick={() => {
                    props.register_user(
                      name,
                      mobile,
                      signUpemail,
                      signUppassword
                    );
                    setOpensignUpDialog(false);
                  }}
                  style={{
                    backgroundColor: "#4AA3DA",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    border: "none",
                    cursor: "pointer",
                    width: "98%",
                  }}
                >
                  Verify
                </button>

                <Divider style={{ margin: "10px 0" }}>OR</Divider>

                <div className="social-logins">
                  <img src={google} alt="Google" />
                  <img src={fb} alt="Apple" />
                  <img src={apple} alt="Facebook" />
                </div>

                <p>
                  Already have an account?
                  <Button
                    className="common-button"
                    onClick={() => {
                      handleOpenDialog();
                      handlesignUpCloseDialog();
                    }}
                  >
                    Sign In
                  </Button>
                </p>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default NewNavbarpage;
