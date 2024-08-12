import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import categorystyle from "../styles/Category.module.css";
import "../styles/star.css";
export const FilterCard = (props) => {
  useEffect(() => {
    props.viewCatergoriesById(props.categories.cat_id);
    return () => { };
  }, []);
  console.log(props.allfilterproduct.all_cat_praduct);
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };
  const filledStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <>
      <div className={categorystyle.filter_page_card_main_body}>
        {Array.isArray(props.allfilterproduct.all_cat_praduct) &&
          props.allfilterproduct.all_cat_praduct.map((carddata) => (
            <>
              <div className={categorystyle.age_filter_card_all}>
                <div className={categorystyle.age_image_container}>
                  <Link
                    to="/productsallview"
                    onClick={() => {
                      props.viewDescription(carddata);
                    }}
                  >
                    <img
                      src={carddata.images}
                      alt=""
                      className={categorystyle.age_card_image_main}
                    />
                  </Link>
                </div>
                <div className={categorystyle.age_card_one_row_line}>
                  <p className={categorystyle.age_card_title}>
                    {carddata.name.length > 39
                      ? carddata.name.substring(0, 39) + "..."
                      : carddata.name}
                  </p>
                  <div className={categorystyle.mrp_flex_ages}>
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
                      <hr className={categorystyle.line_age_straight} />
                    </div>
                    <p className="filter_card_mrp_para_three">
                      {carddata.discountPercentage} % OFF
                    </p>
                  </div>
                  <div className={categorystyle.age_line_star_flex}>
                    {/* <div className="rating">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={value}
                          className={
                            value <= rating ? "star filled" : value - 0.5 <= rating ? "star half-filled" : "star"
                          }
                          onClick={() => handleRatingClick(value)}
                        >
                          ★
                        </span>
                      ))}
                      
                    </div> */}
                    <div class="star-rating">
                      <span class="filled">★</span>
                      <span class="filled">★</span>
                      <span class="filled">★</span>
                      <span class="filled">★</span>
                      <span class="half-filled">★</span>
                    </div>
                    <div className="for-star">
                      <p>4.0</p>
                    </div>
                    <div>
                      <hr className={categorystyle.age_rating_straigth_line} />
                    </div>
                    <p>({carddata.quantityInStock})</p>
                  </div>
                </div>
                {/* <Link>
                  <button className="filter_card_button">Add To Bag</button>
                </Link> */}
              </div>
            </>
          ))}
      </div>
    </>
  );
};
