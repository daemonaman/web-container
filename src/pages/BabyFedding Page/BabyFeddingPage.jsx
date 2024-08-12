import React from "react";
import "./BabyfeddingPage.css";
import BABYFEEDINGIMAGEONE from "../../Assets/BabyFedding Image1.png";
import BABYFEEDINGIMAGETWO from "../../Assets/BabyFedding Image2.png";
import BABYFEEDINGIMAGETHREE from "../../Assets/BabyFedding Image3.png";
import BABYFEEDINGIMAGEFOUR from "../../Assets/BabyFedding Image4.png";
import BABYFEEDINGIMAGEFIVE from "../../Assets/BabyFedding Image5.png";
import BABYFEEDINGIMAGESIX from "../../Assets/BabyFedding Image6.png";

export const BabyfeddingPage = () => {
  return (
    <>
      <div id="BABYFEDDINGPAGE_MAIN_BODY">
        <div id="BABYFEDDINGPAGE_TOP_BODY">
          <div id="BABYFEDDINGPAGE_CONTENT">
            <h2 id="BABYFEDDINGPAGE_HEADING_ONE">Baby Feeding</h2>
          </div>
        </div>
        <div id="BABYFEEDINGPAGE_CARD_BODY">
          <div id="BABYFEEDINGPAGE_CARD_ALL">
            <div id="BABYFEEDINGPAGE_CARD">
              <img
                src={BABYFEEDINGIMAGEONE}
                alt=""
                id="BABYFEEDINGPAGE_CARD_IMAGES"
              />
              <div id="BABYFEEDINGPAGE_CARD_CONTENT">
                <h3 id="BABYFEEDINGPAGE_CARD_HEADING_ONE"> Feeding bottles</h3>
              </div>
            </div>
            {/* 2nd */}
            <div id="BABYFEEDINGPAGE_CARD">
              <img
                src={BABYFEEDINGIMAGETWO}
                alt=""
                id="BABYFEEDINGPAGE_CARD_IMAGES"
              />
              <div id="BABYFEEDINGPAGE_CARD_CONTENT">
                <h3 id="BABYFEEDINGPAGE_CARD_HEADING_ONE"> Baby Food</h3>
              </div>
            </div>
            {/* 3rd */}
            <div id="BABYFEEDINGPAGE_CARD">
              <img
                src={BABYFEEDINGIMAGETHREE}
                alt=""
                id="BABYFEEDINGPAGE_CARD_IMAGES"
              />
              <div id="BABYFEEDINGPAGE_CARD_CONTENT">
                <h3 id="BABYFEEDINGPAGE_CARD_HEADING_ONE"> Breast Pumps</h3>
              </div>
            </div>
            {/* 4th */}
            <div id="BABYFEEDINGPAGE_CARD">
              <img
                src={BABYFEEDINGIMAGEFOUR}
                alt=""
                id="BABYFEEDINGPAGE_CARD_IMAGES"
              />
              <div id="BABYFEEDINGPAGE_CARD_CONTENT">
                <h3 id="BABYFEEDINGPAGE_CARD_HEADING_ONE">Sippy cups</h3>
              </div>
            </div>
            {/* 5th */}
            <div id="BABYFEEDINGPAGE_CARD">
              <img
                src={BABYFEEDINGIMAGEFIVE}
                alt=""
                id="BABYFEEDINGPAGE_CARD_IMAGES"
              />
              <div id="BABYFEEDINGPAGE_CARD_CONTENT">
                <h3 id="BABYFEEDINGPAGE_CARD_HEADING_ONE">
                  {" "}
                  Bottle sterlizers{" "}
                </h3>
              </div>
            </div>
            {/* 6th */}
            <div id="BABYFEEDINGPAGE_CARD">
              <img
                src={BABYFEEDINGIMAGESIX}
                alt=""
                id="BABYFEEDINGPAGE_CARD_IMAGES"
              />
              <div id="BABYFEEDINGPAGE_CARD_CONTENT">
                <h3 id="BABYFEEDINGPAGE_CARD_HEADING_ONE">
                  {" "}
                  Bibs{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
