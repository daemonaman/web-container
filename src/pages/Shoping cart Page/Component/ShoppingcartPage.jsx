/** @format */

import React from "react";
import { useState, useEffect } from "react";
import "../Component/ShoppingcartPage.css";
import { FaStar } from "react-icons/fa";
import SHOPPINGIMAGE1 from "../../../Assets/firstslideimage1.png";
import { CiStar } from "react-icons/ci";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Tabs from "@mui/material/Tabs";
import StarIcon from "@mui/icons-material/Star";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Grid } from "rsuite";
import star from "../Component/Vector (2).png";
import es from "../Component/es.png";
import righticon from "../../../Assets/righticon.png";
const YellowStarIcon = () => <StarIcon htmlColor="yellow" />;
export const ShoppingcartPage = (props) => {
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    valueone: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [valueone, setValueone] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValueone(newValue);
  };
  const labels = {
    0.5: "0.5",
    1: "1",
    1.5: "1.5",
    2: "2",
    2.5: "2.5",
    3: "3",
    3.5: "3.5",
    4: "4",
    4.5: "4.5",
    5: "5",
  };
  useEffect(() => {
    props.viewCartProduct(props.login.admin_id);
    return () => {};
  }, []);
  const [selectedCard, setSelectedCard] = useState(null);
  const handleRadioChange = (index) => {
    setSelectedCard(index);
  };
  const [count, setCount] = useState(0);

  const handleplushIncrement = () => {
    setCount(count + 1);
  };

  const handleminusDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log(props.viewshoppingcart.view_all_cart_product);
  return (
    <div className="SHOPPINGPAGE-body-background">
      <div id="SHOPPINGPAGE_HEADING_ONE">
        <h2
          id=""
          style={{ paddingLeft: "110px", fontWeight: "bold", fontSize: "25px" }}
        >
          Shopping Cart
        </h2>
      </div>
      {/* start */}
      <div className="container-shoppingcart">
        <div className="left-side">
          <div className="scrollable-cards">
            {Array.isArray(props.viewshoppingcart.view_all_cart_product) &&
              props.viewshoppingcart.view_all_cart_product.map(
                (carddata, index) => (
                  <div key={carddata.id} className="card-view-data">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <input
                        type="radio"
                        id={`card-${index}`}
                        name="card"
                        value={index}
                        checked={selectedCard === index}
                        onChange={() => handleRadioChange(index)}
                        className="radio-shoppingcart"
                      />
                      {/*  */}
                      <div style={{ margin: "3rem" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "2rem",
                          }}
                        >
                          <img
                            src={carddata.productDetails.images}
                            className="item-image"
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "-1.5rem",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: 600,
                                textAlign: "justify",
                              }}
                            >
                              {carddata.productDetails.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: 600,
                                textAlign: "justify",
                              }}
                            >
                              {carddata.productDetails.stockStatus}{" "}
                              {carddata.productDetails.quantityInStock}
                            </Typography>
                            <Grid style={{ display: "flex" }}>
                              <Typography
                                style={{ color: "gray", fontSize: "15px" }}
                              >
                                MRP: <del>₹199</del>
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                ₹{carddata.productDetails.regularPrice}
                              </Typography>
                              <Typography
                                color="gray"
                                style={{ fontSize: "25px", marginTop: "-10px" }}
                              >
                                |
                              </Typography>
                              <Typography
                                color="#FF70A6"
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                {carddata.productDetails.discountPercentage}%
                              </Typography>
                            </Grid>
                            <Grid
                              style={{
                                display: "flex",
                                marginLeft: "1%",
                                flexDirection: "row",
                              }}
                            >
                              <img
                                src={star}
                                style={{
                                  marginLeft: "1%",
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                              <img
                                src={star}
                                style={{
                                  marginLeft: "1%",
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                              <img
                                src={star}
                                style={{
                                  marginLeft: "1%",
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                              <img
                                src={star}
                                style={{
                                  marginLeft: "1%",
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                              <img
                                src={es}
                                style={{
                                  marginLeft: "1%",
                                  width: "15px",
                                  height: "15px",
                                }}
                              />
                              <Typography
                                color="gray"
                                style={{ fontSize: "20px", marginTop: "-17px" }}
                              >
                                |
                              </Typography>
                            </Grid>
                            {/* start */}
                            <Grid
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "20px",
                              }}
                            >
                              <div className="counter-container">
                                <button
                                  className="counter-button"
                                  onClick={handleminusDecrement}
                                >
                                  -
                                </button>
                                <div className="counter-display">
                                  QTY:{count}
                                </div>
                                <button
                                  className="counter-button"
                                  onClick={handleplushIncrement}
                                >
                                  +
                                </button>
                              </div>
                              <Typography
                                color="gray"
                                style={{
                                  fontSize: "30px",
                                  marginTop: "-21px",
                                  marginLeft: "-14px",
                                }}
                              >
                                |
                              </Typography>
                              <Typography
                                color="grey"
                                sx={{
                                  marginLeft: "-25px",
                                  marginTop: "-0.4rem",
                                  fontSize: "12px",
                                }}
                              >
                                Delete
                              </Typography>
                              <Typography
                                color="gray"
                                style={{
                                  fontSize: "30px",
                                  marginTop: "-21px",
                                  marginLeft: "-29px",
                                }}
                              >
                                |
                              </Typography>
                              <Typography
                                color="grey"
                                sx={{
                                  marginLeft: "-25px",
                                  marginTop: "-0.4rem",
                                  fontSize: "10px",
                                }}
                              >
                                Save for Later
                              </Typography>
                              <Typography
                                color="gray"
                                style={{
                                  fontSize: "29px",
                                  marginTop: "-18px",
                                  marginLeft: "-33px",
                                }}
                              >
                                |
                              </Typography>
                              <Typography
                                color="grey"
                                sx={{
                                  marginLeft: "-20px",
                                  marginTop: "-0.4rem",
                                  fontSize: "11px",
                                }}
                              >
                                See more Like this
                              </Typography>
                              <Typography
                                color="gray"
                                style={{
                                  fontSize: "29px",
                                  marginTop: "-18px",
                                  marginLeft: "-20px",
                                }}
                              >
                                |
                              </Typography>
                              <Typography
                                color="grey"
                                sx={{
                                  marginLeft: "-25px",
                                  marginTop: "-0.4rem",
                                  fontSize: "12px",
                                }}
                              >
                                Share
                              </Typography>
                            </Grid>
                            {/* end */}
                          </div>
                        </div>
                        <div>
                          <hr />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography>Subtotal (1 item): ₹ 154.00</Typography>
                        </div>
                      </div>

                      {/*  */}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
        <div className="right-side">
          <div className="static-card">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <img src={righticon} alt="" className="static-card-image" />
              <Typography sx={{ fontSize: "13px", color: "#02A6E2" }}>
                Your first order qualifies for FREE Delivery.
                <span style={{ color: "#000" }}>
                  Select this option at checkout.
                </span>
                Details.
              </Typography>
            </div>
            <Typography sx={{ fontSize: "18px" }}>
              Subtotal (1 item): ₹ 154.00
            </Typography>
            <div className="checkbox-container">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">This order contains a gift</label>
            </div>
            <div>
              <Link
                to="/address"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "4%",
                }}
              >
                <button className="proceed-to-buy-button">
                  Proceed to Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      <div id="SHOPPINGPAGE_LAST_CARD_MAIN_BODY_DOWN">
        <div id="SHOPPINGPAGE_LAST_CARD_UP">
          <Typography
            style={{
              fontSize: "30px",
              textAlign: "left",
              fontWeight: "bold",
              marginTop: "5%",
            }}
          >
            {" "}
            Your Items
          </Typography>
          <Box
            sx={{
              width: "100%",
              "@media (max-width:1250px)": {
                width: "50%",
                alignItems: "center",
                marginTop: "2rem",
              },
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                "@media (max-width:1250px)": {
                  width: "60vw",
                },
              }}
            >
              <Tabs
                value={valueone}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{ marginTop: "2%" }}
              >
                <Tab label="Saved for Later" {...a11yProps(0)} />
                <Tab
                  label="Buy it again"
                  {...a11yProps(1)}
                  sx={{ color: "#FF70A6" }}
                />
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={valueone} index={0}>
              No items saved for later
            </CustomTabPanel>
            <CustomTabPanel value={valueone} index={1}></CustomTabPanel>
          </Box>
        </div>
        <div id="SHOPPINGPAGE_LAST_CARD_FLEX_ONE">
          <p id="SHOPPINGPAGE_LAST_CARD_FLEX_ONE_PARA_ONE">Need help?</p>
          <p id="SHOPPINGPAGE_LAST_CARD_FLEX_ONE_PARA_TWO">
            Visit the help section{" "}
            <span id="SHOPPINGPAGE_LAST_CARD_FLEX_ONE_SPAN_ONE">or</span>{" "}
            contact us
          </p>
        </div>
      </div>
    </div>
  );
};
