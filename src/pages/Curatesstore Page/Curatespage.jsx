import React from "react";
import "../Curatesstore Page/Curatespage.css";
import CURATEDIMAGEONE from "../../Assets/CURATED IMAGE1.png";
import CURATEDIMAGETWO from "../../Assets/CURATED IMAGE2.png";
import CURATEDIMAGETHREE from "../../Assets/CURATED IMAGE13png.png";
import CURATEDIMAGEFOUR from "../../Assets/CURATED IMAGE4png.png";
export const CuratestorePage = () => {
  return (
    <>
      <div id="CURATEPAGE_MAIN_BODY">
        <div id="CURATESPAGE_TOP_BODY">
          <h2 id="CURATESPAGE_HEADING_ONE">Curated stores</h2>
        </div>
        <div id="CURATEDPAGE_CARD_BODY">
          <div id="CURATEDPAGE_CARD_ALL">
            <div id="CURATEDPAGE_CARD_ONE">
              <img src={CURATEDIMAGEONE} alt="" id="CURATEDPAGE_CARD_IMAGE" />
              <div id="CURATEDPAGE_CARD_CONTENT">
                <h3 id="CURATEDPAGE_CARD_HEADING_ONE">1-Day Delivery</h3>
              </div>
            </div>
            {/* 2nd */}
            <div id="CURATEDPAGE_CARD_ONE">
              <img src={CURATEDIMAGETWO} alt="" id="CURATEDPAGE_CARD_IMAGE" />
              <div id="CURATEDPAGE_CARD_CONTENT">
                <h3 id="CURATEDPAGE_CARD_HEADING_ONE">New Born Baby Store</h3>
              </div>
            </div>
            {/* 3rd */}
            <div id="CURATEDPAGE_CARD_ONE">
              <img src={CURATEDIMAGETHREE} alt="" id="CURATEDPAGE_CARD_IMAGE" />
              <div id="CURATEDPAGE_CARD_CONTENT">
                <h3 id="CURATEDPAGE_CARD_HEADING_ONE">Premium Baby Store</h3>
              </div>
            </div>
            {/* 4th */}
            <div id="CURATEDPAGE_CARD_ONE">
              <img src={CURATEDIMAGEFOUR} alt="" id="CURATEDPAGE_CARD_IMAGE" />
              <div id="CURATEDPAGE_CARD_CONTENT">
                <h3 id="CURATEDPAGE_CARD_HEADING_ONE">Gifting Store</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="CURATEDPAGE_BACKGROUND_IMAGE"></div>
        <div id="CURATEDPAGE_BUTTON">
          {/* <button id="CURATEDPAGE_UNDER_BUTTON">Shop Now</button> */}
          <button className="button">Shop Now</button>

        </div>
      </div>
    </>
  );
};
