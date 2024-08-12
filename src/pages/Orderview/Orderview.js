import React, { useState } from "react";
import coins from "../../Assets/Coins.png";
import product from "../../Assets/Rectangle 928.png";
import "./Orderview.css";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const Orderview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Confirmed", "Shipped", "Out For delivery", "Delivered"];
  const dates = ["Confirmed", "Shipped", "Out For delivery", "Delivered"];

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <>
      <div className="mn-order">
        <div className="order-wrapper-main">
          <div className="order-wrapper">
            <div className="order-inside">
              <h1>Delivery Address</h1>
              <div className="name-btn item">
                <p>Name</p>
                <button>Change</button>
              </div>
              <div className="text">
                <p id="adress">
                  Adressxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
              <div className="name-btn item">
                <p>Phone</p>
                <button>Change</button>
              </div>
              <p id="phn-no">+91 9876543210</p>
            </div>
            <div className="order-inside">
              <h1>Your Rewards</h1>
              <div className="name-btn-coin">
                <img src={coins} alt="" srcset="" />
                <p>
                  30 KidzTryz Coins Cashback <br />
                  <span>Use it to save on your next order</span>
                </p>
              </div>
            </div>
            <div className="order-inside">
              <h1>More Actions</h1>
              <div className="name-btn item">
                <p>Share order details</p>
                <button>Share Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* order confirmation page */}
      <div className="main-order">
        <div className="image-wrapper">
          <div>
            <img src={product} alt="" srcset="" />
          </div>
          <div className="details">
            <span>LuvLap Silicone FoodFruit Nibbler</span>
            <br />
            <span>Colour: Violet & Pink</span>
            <br />
            <span>₹ 154</span>
            <br />
            <span>
              {" "}
              <a href="">Need Help?</a>
            </span>
          </div>
        </div>
        <div className="stepper-container">
          <div className="steper">
            <Stepper
              style={{ width: "110%", Color: "green" }}
              activeStep={1}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step key={label} style={{ width: "5vw", Color: "green" }}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="h-r">
            <hr />
          </div>
          <div className="item-status">
            <div>
              <h1>Item waiting to be picked up by courier partner</h1>
            </div>
            <div className="btn-pink">
              <button>Cancel</button>
            </div>
          </div>
          <div className="span_item">
            <p>Fri, 19th Jan</p>
            <p>3:30 pm</p>
            <p>Your Order has been Placed.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderview;
