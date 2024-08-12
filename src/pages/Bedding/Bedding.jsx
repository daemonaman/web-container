import React from "react";
import "./Bedding.css";
import bed from "../../Assests/Bedding&N.svg";
import bath from "../../Assests/Bath&Skin.svg";
import feed from "../../Assests/feeding.svg";
import register from "../../Assests/Register.svg";
const Bedding = () => {
  return (
    <div className="TripleHeadingImagesComponent">
      <div>
        <h1>Heading 1</h1>
        <img src={bed} alt="Image 1" />
      </div>

      <div>
        <h1>Heading 2</h1>
        <img src={bath} alt="Image 2" />
      </div>
      <div>
        <a href="http://google.com">
          <img src={register} alt="" srcset="" />
        </a>
      </div>
      <div>
        <h1>Heading 3</h1>
        <img src={feed} alt="Image 3" />
      </div>
    </div>
  );
};

export default Bedding;
