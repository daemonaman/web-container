import React from "react";
import "../Bedding Page/BeddingPage.css";
import BeddingImage1 from "../../Assets/BeedingImage1.png";
import BeddingImage2 from "../../Assets/Beedingimage2.png";
import BeddingImage3 from "../../Assets/beddingimage3.png";
import BeddingImage4 from "../../Assets/BeddingImage4.png";
import BeddingImage5 from "../../Assets/BeddingImage5.png";
import BeddingImage6 from "../../Assets/BeddingImage6.png";
export const BeddingPage = () => {
  return (
    <>
      <div id="BeddingPage_Main-Body">
        <div id="beddingpage_top-body">
          <h2 id="beddingpage_heading1">Bedding & Nursery</h2>
        </div>
        <div id="beddingpage_card_body">
          <div id="beddingpage_card_all">
            <div id="beddingpage_card">
              <img src={BeddingImage1} alt="" id="beddingpage_images" />
              <div id="beddingpage_content">
                <h3 id="beddingpage_heading2">Bedding & mattresses</h3>
              </div>
            </div>
            {/* 2nd */}
            <div id="beddingpage_card">
              <img src={BeddingImage2} alt="" id="beddingpage_images" />
              <div id="beddingpage_content">
                <h3 id="beddingpage_heading2">Cots & cradles</h3>
              </div>
            </div>
            {/* 3rd */}
            <div id="beddingpage_card">
              <img src={BeddingImage3} alt="" id="beddingpage_images" />
              <div id="beddingpage_content">
                <h3 id="beddingpage_heading2">
                  Booster seats &<br /> high chairs
                </h3>
                {/* <h3 id="Beddingpage_heading3">high chairs</h3> */}
              </div>
            </div>
            {/* 4th */}
            <div id="beddingpage_card">
              <img src={BeddingImage4} alt="" id="beddingpage_images" />
              <div id="beddingpage_content">
                <h3 id="beddingpage_heading2">Bedding & mattresses</h3>
              </div>
            </div>
            {/* 5th */}
            <div id="beddingpage_card">
              <img src={BeddingImage5} alt="" id="beddingpage_images" />
              <div id="beddingpage_content">
                <h3 id="beddingpage_heading2">Bedding & mattresses</h3>
              </div>
            </div>
            {/* 6th */}
            <div id="beddingpage_card">
              <img src={BeddingImage6} alt="" id="beddingpage_images" />
              <div id="beddingpage_content">
                <h3 id="beddingpage_heading2">Bedding & mattresses</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
