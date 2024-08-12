import React, { useEffect, useState } from "react";
import productstyle from "../Components/ProductView.module.css";
import { IoStarSharp } from "react-icons/io5";
import "../Components/ProductView.css";
import { Link } from "react-router-dom";
import RatingReview from "./ProductViewDetails";
import Review from "./Review";
import { logDOM } from "@testing-library/react";
const ProductAllView = (props) => {
  const [value, setValue] = React.useState(2);
  console.log(props.descrption.viewdescription.name);
  const [wordData, setWordData] = useState(
    props.descrption.viewdescription.images[0]
  );
  const [val, setVal] = useState(0);
  const handleClick = (index) => {
    console.log(index);
  };
  console.log(wordData);
  return (
    <>
      <div className={productstyle.product_view_main_body}>
        {/* leftside __________image dynamic */}
        <div className={productstyle.main}>
          <img src={wordData} className={productstyle.worddata_image_body} />

          <div className={productstyle.flex_row}>
            {Array.isArray(props.descrption.viewdescription.images) &&
              props.descrption.viewdescription.images.map((data, index) => (
                <div className={productstyle.thumbnail} key={index}>
                  <img
                    className={
                      wordData.id == index ? "{productstyle.clicked}" : ""
                    }
                    src={data}
                    onClick={() => {
                      setVal(index);
                      const wordSlider = data;
                      console.log(wordSlider);
                      setWordData(wordSlider);
                    }}
                    id={productstyle.product_view_image_under_body}
                  />
                </div>
              ))}
          </div>
        </div>
        {/* leftside __________image dynamic */}
        {/* rightside_________description _____start */}
        <div className={productstyle.product_view_right_description}>
          {/* rightside_________titlesection _____start */}
          {/* {Array.isArray(props.descrption.viewdescription)&&(props.descrption.viewdescription).map((items) => ( */}
          <>
            <div className={productstyle.product_view_description_title}>
              <h3 className={productstyle.product_view_description_title_main}>
                {props.descrption.viewdescription.name}
              </h3>
            </div>
            <div className={productstyle.product_view_rating_section}>
              <div>
                <IoStarSharp color="yellow" fontSize={22} />
                <IoStarSharp color="yellow" fontSize={22} />
                <IoStarSharp color="yellow" fontSize={22} />
                <IoStarSharp color="yellow" fontSize={22} />
              </div>
              <h5 className={productstyle.rating_view_show}>4.2</h5>
              <div className={productstyle.product_view_rating_line}>
                <hr />
              </div>
              <div>
                <h4 className={productstyle.product_view_stock_title}>
                  9,658 Ratings
                </h4>
              </div>
            </div>
            <div className={productstyle.product_view_mrp_section}>
              <h3 className={productstyle.product_view_mrp_section_del}>
                MRP:
                <del>
                  ₹{props.descrption.viewdescription.regularPrice}
                </del>₹{" "}
                {parseInt(props.descrption.viewdescription.regularPrice) -
                  (props.descrption.viewdescription.regularPrice *
                    props.descrption.viewdescription.discountPercentage) /
                  100}
              </h3>
              <div>
                <hr className={productstyle.mrp_section_view_line} />
              </div>
              <div className={productstyle.mrp_section_heading_one_body}>
                <h3 className={productstyle.mrp_section_heading_one}>
                  {props.descrption.viewdescription.discountPercentage} % OFF
                </h3>
              </div>
            </div>
            <div id="PRODUCTPAGE_bUTTON_SECTION_MAIN_BODY">
              <div id="PRODUCTPAGE_BUTTON_SECTION_ONE">
                <div id="PRODUCTPAGE_BUTTON_SECTION_ONE_BODY">
                  <Link to="">
                    <button
                      id="PRODUCTPAGE_BUTTON_SECTION_UNDER_ONE"
                      // onClick={() => { }}
                      onClick={() => {

                      }}
                    >
                      Add To Bag
                    </button>
                  </Link>
                </div>
                <div id="PRODUCTPAGE_BUTTON-SECTION_TWO_BODY">
                  <Link to="/shoppingcart">
                    <button id="PRODUCTPAGE_BUTTON_SECTION_UNDER_TWO">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
          {/* ))} */}
          {/* rightside_________titlesection _____end */}
        </div>
        {/* rightside_________description _____end */}
      </div>
      {/* description */}
      <div>
        {/* {productData.map((product, index) => ( */}
        <div id="PRODUCTPAGE_SECRIPTION_MAIN_BODY">
          <div id="PRODUCTPAGE_DESCRIPTION_ALL">
            <div id="PRODUCTPAGE_TOP_CONTAINER">
              <h2 id="PRODUCTPAGE_HEADING_ONE">Product Description</h2>
            </div>
            <div id="PRODUCTPAGE_ALL_UL">
              <ul>
                {/* {product.description.map((item, itemIndex) => ( */}
                <li id="PRODUCTPAGE_ALL_LI">
                  {props.descrption.viewdescription.description}
                </li>
                {/* ))} */}
              </ul>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
      <RatingReview />
      {/* <Review /> */}
    </>
  );
};
export default ProductAllView;
