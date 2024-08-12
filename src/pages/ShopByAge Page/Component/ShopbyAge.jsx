import React,{useEffect} from "react";
import "./ShopbyAge.css";
import SHOPAGEPAGEIMAGE1 from "../../../Assets/ShopbyAGE Image1.png";
import SHOPAGEPAGEIMAGE2 from "../../../Assets/ShopbyAGE Image2.png";
import SHOPAGEPAGEIMAGE3 from "../../../Assets/ShopbyAGE Image3.png";
import SHOPAGEPAGEIMAGE4 from "../../../Assets/ShopbyAGE Image4.png";
import SHOPAGEPAGEIMAGE5 from "../../../Assets/ShopbyAGE Image5.png";
import { Link } from "react-router-dom";
const ShopbyAgePage = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleageclick=()=>{
    props.setAge("0-6");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div id="SHOPBYAGEPAGE_MAIN_BODY">
        <div id="SHOPAGEPAGE_TOP_BODY">
          <div id="SHOPAGEPAGE_CONTENT_BODY">
            <h2 id="SHOPAGEPAGE_HEADING_ONE">Shop by Age</h2>
          </div>
        </div>
        <div id="SHOPAGEPAGE_CARD_MAIN_BODY">
          <div id="SHOPAGEPAGE_CARD_ALL">
            <div id="SHOPAGEPAGE_CARD">
              <Link
                to={`/prouctsbyage/${"0-6"}`}
                onClick={handleageclick}
                // onClick={() => {
                //   props.setAge("0-6");
                 
                // }}
              >
                <img
                  src={SHOPAGEPAGEIMAGE1}
                  alt=""
                  id="SHOPAGEPAGE_CARD-IMAGE"
                  className="card-image"

                />
                {/* <div id="SHOPAGEPAGE_CARD_CONTENT_BODY"> */}
                <h5 id="SHOPAGEPAGE_CARD_PARAGRAPH_ONE">0-6 Months</h5>
                {/* </div> */}
                <p id="SHOPAGEPAGE_CARD_PARAGRAPH_TWO">Shop Now</p>
              </Link>
            </div>
            {/* 2nd */}
            <div id="SHOPAGEPAGE_CARD">
              <Link
                to={`/prouctsbyage/${"6-12"}`}
                onClick={handleageclick}
              >
                <img
                  src={SHOPAGEPAGEIMAGE2}
                  alt=""
                  id="SHOPAGEPAGE_CARD-IMAGE"
                  className="card-image"
                />
                <div id="SHOPAGEPAGE_CARD_CONTENT_BODY">
                  <h5 id="SHOPAGEPAGE_CARD_PARAGRAPH_ONE">6-12 Months</h5>
                </div>
                <p id="SHOPAGEPAGE_CARD_PARAGRAPH_TWO">Shop Now</p>
              </Link>
            </div>
            {/* 3rd */}
            <div id="SHOPAGEPAGE_CARD">
              <Link
                to={`/prouctsbyage/${"12-18"}`}
                onClick={handleageclick}
              >
                <img
                  src={SHOPAGEPAGEIMAGE3}
                  alt=""
                  id="SHOPAGEPAGE_CARD-IMAGE"
                  className="card-image"
                />
                <div id="SHOPAGEPAGE_CARD_CONTENT_BODY">
                  <h5 id="SHOPAGEPAGE_CARD_PARAGRAPH_ONE">12-18 Months</h5>
                </div>
                <p id="SHOPAGEPAGE_CARD_PARAGRAPH_TWO">Shop Now</p>
              </Link>
            </div>
            {/* 4th */}
            <div id="SHOPAGEPAGE_CARD">
              <Link
                to={`/prouctsbyage/${"18-24"}`}
                onClick={handleageclick}
              >
                <img
                  src={SHOPAGEPAGEIMAGE4}
                  alt=""
                  id="SHOPAGEPAGE_CARD-IMAGE"
                  className="card-image"
                />
                <div id="SHOPAGEPAGE_CARD_CONTENT_BODY">
                  <h5 id="SHOPAGEPAGE_CARD_PARAGRAPH_ONE">18-24 Months</h5>
                </div>
                <a href="">
                  <p id="SHOPAGEPAGE_CARD_PARAGRAPH_TWO">Shop Now</p>
                </a>
              </Link>
            </div>
            {/* 5th */}
            <Link
              to={`/prouctsbyage/${"24+"}`}
              onClick={handleageclick}
            >
              <div id="SHOPAGEPAGE_CARD">
                <div id="SHOPAGEPAGE_CARD_CONTENT_BODY">
                  <img
                    src={SHOPAGEPAGEIMAGE5}
                    alt=""
                    id="SHOPAGEPAGE_CARD-IMAGE"
                    className="card-image"
                  />
                  <h5 id="SHOPAGEPAGE_CARD_PARAGRAPH_ONE">24+ Months</h5>
                </div>
                <p id="SHOPAGEPAGE_CARD_PARAGRAPH_TWO">Shop Now</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopbyAgePage;
