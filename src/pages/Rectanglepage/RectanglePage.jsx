import React from "react";
import "../Rectanglepage/RectanglePage.css";
import RectangleImage1 from "../../Assets/rectangle image1.png";
import Rectangleimage2 from "../../Assets/rectangle image2.png";
import Rectangleimage3 from "../../Assets/rectange image3.png";
import Rectangleimage4 from "../../Assets/rectangle image4.png";
import Rectangleimage5 from "../../Assets/rectangle image 5.png";
import Rectangleimage6 from "../../Assets/rectangle image6.png";
export const RectanglePage = () => {
  return (
    <>
      <div id="RectanglePage_main_body">
        <div id="RectanglePage_top_body">
          <h2 id="rectanglepage_heading1">Diapering</h2>
        </div>
        <div id="rectanglePage_card_body">
          <div id="rectanglepage_card_all">
            <div id="rectanglepage_card">
              <img src={RectangleImage1} alt="" id="Rectanglepage_images" />
              <div id="rectnaglepage_content">
                <h3 id="rectanglepage_heading2">Diaper pants</h3>
              </div>
            </div>
            <div id="rectanglepage_card">
              <img src={Rectangleimage2} alt="" id="Rectanglepage_images" />
              <div id="rectnaglepage_content">
                <h3 id="rectanglepage_heading2">Wet wipes</h3>
              </div>
            </div>
            <div id="rectanglepage_card">
              <img src={Rectangleimage3} alt="" id="Rectanglepage_images" />
              <div id="rectnaglepage_content">
                <h3 id="rectanglepage_heading2">Cloth diapers & langots</h3>
              </div>
            </div>
            <div id="rectanglepage_card">
              <img src={Rectangleimage4} alt="" id="Rectanglepage_images" />
              <div id="rectnaglepage_content">
                <h3 id="rectanglepage_heading2">Taped diapers</h3>
              </div>
            </div>
            <div id="rectanglepage_card">
              <img src={Rectangleimage5} alt="" id="Rectanglepage_images" />
              <div id="rectnaglepage_content">
                <h3 id="rectanglepage_heading2">Premium diapers</h3>
              </div>
            </div>
            <div id="rectanglepage_card">
              <img src={Rectangleimage6} alt="" id="Rectanglepage_images" />
              <div id="rectnaglepage_content">
                <h3 id="rectanglepage_heading2">Premium diapers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
