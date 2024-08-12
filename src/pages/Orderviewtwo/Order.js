// import React from 'react'
import "./Order.css";
import coin from "../../Assets/Coins.png";
import prod from "../../Assets/Rectangle 931.png";
import * as React from "react";
import Box from "@mui/material/Box";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const Order = () => {
  const steps = ["Confirmed", "Shipped", "Out For delivery", "Delivered"];
  const labels = [
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered",
  ];
  const dates = [
    "Jan 15, 2024",
    "Jan 18, 2024",
    "Jan 20, 2024",
    "Jan 23, 2024",
  ];
  return (
    <>
      <div className="section-head">
        <div className="main-section">
          <div className="contain">
            <h1>Delivery Adress</h1>
            <div className="inside-elemet">
              <span>Name</span>
              <button>Change</button>
            </div>
            <h4>adressxxxxxxxxx</h4>
            <div className="inside-elemet">
              <span>Phone No</span>
              <button>Change</button>
            </div>
            <h4>+91 7898765678</h4>
          </div>

          <div className="contain-items">
            <h1>Your Rewards</h1>
            <div className="inside-elements">
              <img src={coin} alt="" />
              <p>
                {" "}
                <span>30 KidzTryz Coins Cashback</span>
                <br />
                <span>Use it to save on your next order</span>
              </p>
            </div>
          </div>

          <div className="contain">
            <h1>More Actions</h1>
            <div className="inside-elemet">
              <p>Download Invoice</p>
              <button id="inside-btn">Download</button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="section-down">
        <div className="content-prod">
          <div>
            <img src={prod} alt="" srcset="" />
          </div>
          <div className="product-info">
            <span id="p">
              LuvLap Silicone <br /> FoodFruit Nibbler
            </span>
            <br />
            <span>Colour: Violet & Pink</span>
            <br />
            <span id="sp-an">₹ 154</span>
            <br />
            <a href="">Need Help?</a>
          </div>

          <div className="intent-c">
            <Box sx={{ width: "100%", marginTop: "30px" }}>
              <Stepper
                style={{ width: "100%" }}
                activeStep={1}
                alternativeLabel
              >
                {steps.map((label, index) => (
                  <Step key={label} style={{ width: "5vw" }}>
                    <StepLabel>{labels[index]}</StepLabel>
                    <p className="date-label">{dates[index]}</p>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <div className="last-line">
              <div className="h-rt">
                <hr />
              </div>
              <div className="item-details">
                <div>
                  <h1>Item waiting to be picked up by courier partner</h1>
                </div>
                <div>
                  <p>Rate & Review the Product</p>
                </div>
                <div className="return">
                  <button>Return</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
