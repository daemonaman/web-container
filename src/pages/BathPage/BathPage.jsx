import React from "react";
import "../BathPage/BathPage.css";
import BATHPAGEIMAGEONE from "../../Assets/Bathimage1.png";
import BATHPAGEIMAGETWO from "../../Assets/Bathimage2.png";
import BATHPAGEIMAGETHREE from "../../Assets/Bathimage3.png";
import BATHPAGEIMAGEFOUR from "../../Assets/BathImage4.png";
import BATHPAGEIMAGEFIVE from "../../Assets/BathImage5.png";
import BATHPAGEIMAGESIX from "../../Assets/Bathimage6.png";
export const BathPage = () => {
  return (
    <>
      <div id="BATHPAGE_MAIN_BODY">
        <div id="BATHPAGE_TOP_BODY">
          <h2 id="BATHPAGE_HEADING_ONE">Bath & Skincare</h2>
        </div>
        <div id="BATHPAGE_CARD_BODY">
          <div id="BATHPAGE_CARD_ALL">
            <div id="BATHPAGE_CARD_ONE">
              <img src={BATHPAGEIMAGEONE} alt="" id="BATHPAGE_CARD_IMAGE" />
              <div id="BATHPAGE_CARD_CONTENT">
                <h3 id="BATHPAGE_CARD_HEADING_ONE">Soaps and washes</h3>
              </div>
            </div>
            {/* 2nd */}
            <div id="BATHPAGE_CARD_ONE">
              <img src={BATHPAGEIMAGETWO} alt="" id="BATHPAGE_CARD_IMAGE" />
              <div id="BATHPAGE_CARD_CONTENT">
                <h3 id="BATHPAGE_CARD_HEADING_ONE">Shampoos</h3>
              </div>
            </div>
            {/* 3rd */}
            <div id="BATHPAGE_CARD_ONE">
              <img src={BATHPAGEIMAGETHREE} alt="" id="BATHPAGE_CARD_IMAGE" />
              <div id="BATHPAGE_CARD_CONTENT">
                <h3 id="BATHPAGE_CARD_HEADING_ONE">Laundry detergents</h3>
              </div>
            </div>
            {/* 4th */}
            <div id="BATHPAGE_CARD_ONE">
              <img src={BATHPAGEIMAGEFOUR} alt="" id="BATHPAGE_CARD_IMAGE" />
              <div id="BATHPAGE_CARD_CONTENT">
                <h3 id="BATHPAGE_CARD_HEADING_ONE">Lotions & creams</h3>
              </div>
            </div>
            {/* 5th */}
            <div id="BATHPAGE_CARD_ONE">
              <img src={BATHPAGEIMAGEFIVE} alt="" id="BATHPAGE_CARD_IMAGE" />
              <div id="BATHPAGE_CARD_CONTENT">
                <h3 id="BATHPAGE_CARD_HEADING_ONE">Powders</h3>
              </div>
            </div>
            {/* 6th */}
            <div id="BATHPAGE_CARD_ONE">
              <img src={BATHPAGEIMAGESIX} alt="" id="BATHPAGE_CARD_IMAGE" />
              <div id="BATHPAGE_CARD_CONTENT">
                <h3 id="BATHPAGE_CARD_HEADING_ONE">Powders</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
