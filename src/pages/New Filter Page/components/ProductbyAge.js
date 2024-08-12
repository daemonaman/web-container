import React, { useEffect, useState } from "react";
import agestyle from "../styles/AgeFilter.module.css";
import { Link } from "react-router-dom";
import "../styles/star.css";
import ProductAgeCont from "../container/productAgeCont";
import filter from "../components/Filter";
import Filter from "../components/Filter";

const Agefilter = (props) => {
  useEffect(() => {
    props.ViewProductbyAge(props.age.age);

    return () => { };
  }, []);
  console.log("sssss", props.allfilterproduct);
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };
  return (
    <>
      <div className={agestyle.filter_page_card_main_body}>
        {Array.isArray(props.allfilterproduct.all_praduct_by_age) &&
          props.allfilterproduct.all_praduct_by_age.map((carddata) => (
            <div className={agestyle.age_filter_card_all}>
              <div className={agestyle.age_image_container}>
                <Link to="/productsallview">
                  <img
                    src={carddata.images}
                    alt=""
                    className={agestyle.age_card_image_main}
                  />
                </Link>
              </div>
              <div className={agestyle.age_card_one_row_line}>
                <p className={agestyle.age_card_title}>
                  {carddata.name.length > 30
                    ? carddata.name.substring(0, 30) + "..."
                    : carddata.name}
                </p>
                <div className={agestyle.mrp_flex_ages}>
                  <p className="filter_card_mrp_para_one">
                    MRP:
                    <del> ₹{carddata.regularPrice}</del>
                  </p>
                  <p className="filter_card_mrp_para_two">
                    ₹
                    {parseInt(carddata.regularPrice) -
                      (carddata.regularPrice * carddata.discountPercentage) /
                      100}
                  </p>
                  <div>
                    <hr className={agestyle.line_age_straight} />
                  </div>
                  <p className="filter_card_mrp_para_three">
                    {carddata.discountPercentage} % OFF
                  </p>
                </div>
                <div className={agestyle.age_line_star_flex}>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={value <= 4.5 ? "star filled" : "star"}
                        onClick={() => handleRatingClick(value)}
                      >
                        &#9733;
                      </span>
                    ))}
                    4.5
                  </div>
                  <div>
                    <hr className={agestyle.age_rating_straigth_line} />
                  </div>
                  <p>({carddata.quantityInStock})</p>
                </div>
              </div>
            </div>
          ))}
        {/* <div sx={{ display: "flex" }}>
          <Filter />
        </div> */}
      </div>
    </>
  );
};

export default Agefilter;
