import React from "react";
import "../Ecommcontactus page/EcomcontactusPage.css";
import { Link } from "react-router-dom";

export const EcommContactUsPage = () => {
  return (
    <>
      <div id="ECOMMCONTACTUS_MAIN_BODY">
        <div id="ECOMMCONTACTUS_CARD_SECTION">
          {/* LEFT SIDE */}
          <div id="ECOMMCONTACTUS_CARD_LEFT_SIDE">
            <div id="ECOMMCONTACTUS_CARD_LEFT_SIDE_SELECT_CONTAINER"></div>
          </div>
          {/* RIGHT SIDE */}
          <div id="ECOMMCONTACTUS_CARD_RIGHT_SIDE">
            <h3 id="ECOMMCONTACTUS_CARD_RIGHT_SIDE_HEADING_ONE">
              What issue are you facing?
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
