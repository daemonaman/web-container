import React from "react";
import "../Viewmore Page/ViewmorePage.css";
import mainlogoview from "../../Assets/mainlogo.png";
import VIEWMOREPAGEIMAGE from "../../Assets/Viewpage image1.png";
import VIEWCARDIMAGE1 from "../../Assets/Viewpage cardimage1.png";
import VIEWCARDIMAGE2 from "../../Assets/Viewpage cardimage2.png";
import VIEWCARDIMAGE3 from "../../Assets/Viewpage cardimage3.png";
import VIEWCARDIMAGE4 from "../../Assets/Viewpage cardimage4.png";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
export const ViewmorePage = () => {
  return (
    <>
      <div id="VIEWMOREPAGE_MAIN_BODY">
        <div id="VIEWMOREPAGE_ONE_IMAGE">
          <img src={mainlogoview} alt="" id="MAINLOGOVIEW_IMAGE_ONE" />
        </div>
        <div id="VIEWMOREPAGE-SECOND-IMAGE_CARD">
          <img
            src={VIEWMOREPAGEIMAGE}
            alt=""
            id="VIEWMOREPAGE_CARD_SECOND_IMAGE"
          />
        </div>
        <div id="VIEWMOREPAGE_CARD_BODY">
          <div id="VIEWMOREPAGE_CARD_ALL">
            <div id="VIEWMOREPAGE_CARD">
              <img
                src={VIEWCARDIMAGE1}
                alt=""
                id="VIEWMOREPAGE_CARD_UNDER_IMAGE"
              />
              <p id="VIEWMOREPAGE_CARD_PARAGRAPH">Baby Swaddle Blankets</p>
              <div id="VIEWMOREPAGE_CARD_CONTENT">
                <p id="VIEWMOREPAGE_PARAGRAPH-TWO">
                  Rs.699.00 <span id="VIEWMOREPAGE-SPAN_ONE">-60%</span>
                </p>
                <p id="VIEWMOREPAGE_LOGO_PARA">
                  <FaRegStar color="yellow" />
                  4.5
                </p>
              </div>
            </div>
            {/* 2nd card */}
            <div id="VIEWMOREPAGE_CARD">
              <img
                src={VIEWCARDIMAGE2}
                alt=""
                id="VIEWMOREPAGE_CARD_UNDER_IMAGE"
              />
              <p id="VIEWMOREPAGE_CARD_PARAGRAPH">Baby Swaddle Blankets</p>
              <div id="VIEWMOREPAGE_CARD_CONTENT">
                <p id="VIEWMOREPAGE_PARAGRAPH-TWO">
                  Rs.699.00 <span id="VIEWMOREPAGE-SPAN_ONE">-60%</span>
                </p>
                <p id="VIEWMOREPAGE_LOGO_PARA">
                  <FaRegStar color="yellow" />
                  4.5
                </p>
              </div>
            </div>
            {/* 3rd card */}
            <div id="VIEWMOREPAGE_CARD">
              <img
                src={VIEWCARDIMAGE3}
                alt=""
                id="VIEWMOREPAGE_CARD_UNDER_IMAGE"
              />
              <p id="VIEWMOREPAGE_CARD_PARAGRAPH">Baby Swaddle Blankets</p>
              <div id="VIEWMOREPAGE_CARD_CONTENT">
                <p id="VIEWMOREPAGE_PARAGRAPH-TWO">
                  Rs.699.00 <span id="VIEWMOREPAGE-SPAN_ONE">-60%</span>
                </p>
                <p id="VIEWMOREPAGE_LOGO_PARA">
                  <FaRegStar color="yellow" />
                  4.5
                </p>
              </div>
            </div>
            {/* 4th card */}
            <div id="VIEWMOREPAGE_CARD">
              <img
                src={VIEWCARDIMAGE4}
                alt=""
                id="VIEWMOREPAGE_CARD_UNDER_IMAGE"
              />
              <p id="VIEWMOREPAGE_CARD_PARAGRAPH">Baby Swaddle Blankets</p>
              <div id="VIEWMOREPAGE_CARD_CONTENT">
                <p id="VIEWMOREPAGE_PARAGRAPH-TWO">
                  Rs.699.00 <span id="VIEWMOREPAGE-SPAN_ONE">-60%</span>
                </p>
                <p id="VIEWMOREPAGE_LOGO_PARA">
                  <FaRegStar color="yellow" />
                  4.5
                </p>
              </div>
            </div>
            {/* <div id="VIEWMOREPAGE_BUTTON_DIV">
              <Link to="/viewmore" id="VIEWMOREPAGE_BUTTON-LINK">
              <button> View More</button> 
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
