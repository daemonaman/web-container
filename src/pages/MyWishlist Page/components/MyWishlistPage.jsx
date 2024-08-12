import React, { useState,useEffect } from "react";
import "../styles/MyWishlistPage.css";
import DOWNLOGO1 from "../../../Assets/down logo1.png";
import DOWNLOGO2 from "../../../Assets/down logo2.png";
import DOWNLOGO3 from "../../../Assets/down logo3.png";
import DOWNLOGO4 from "../../../Assets/down logo4.png";
import {
  MyWishlistData,
  MyWishlistdatathree,
  MyWishlistdatatwo,
} from "./MyWishlistData";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
 const MyWishlistPage = (props) => {
  const [isAdded, setAdded] = useState(false);
  const [add, setadd] = useState(false);
  const [plus, setplus] = useState(false);
  const [firstIconVisible, setFirstIconVisible] = useState(true);
  const [secondIconVisible, setsecondIconVisible] = useState(true);
  // useEffect(() => {
  //   props.viewWishlist(props.login);
  //   return () => {};
  // }, [props.login.isHome, props.login.admin_id]]);
  // useEffect(() => {
  //   if (!props.login.isHome) {
  //     props.viewWishlist(props.login.admin_id);
  //   }
  // }, []);
  //  console.log(props.login.admin_id);
  console.log(props.wishlist.all_wishlist);
  const handleIconClick = () => {
    setFirstIconVisible(!firstIconVisible);
  };

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };
  const AddCart = () => {
    setadd(true);
    setTimeout(() => {
      setadd(false);
    }, 1000);
  };
  const handleAdd = () => {
    setplus(true);
    setTimeout(() => {
      setplus(false);
    }, 500);
  };
  function calculateRegularPrice(mrp, discountPercentage) {
   
    const discountDecimal = discountPercentage / 100;

    const discountAmount = mrp * discountDecimal;

    const regularPrice = mrp - discountAmount;

    return regularPrice.toFixed(2);
}
  return (
    <>
      <div id="MYWISHLISTPAGE_MAIN_BODY">
        <div id="MYWISHLISTPAGE_TOP_CONTENT">
          <h2 id="MYWISHLISTPAGE_TOP_HEADING_ONE">My Wishlist</h2>
          <div id="MYWISHLISTPAGE_ALL_CARD_BODY">
          {/* Array.isArray(props.wishlist.all_wishlist) &&
        props.wishlist.all_wishlist */}
            {Array.isArray(props.wishlist.all_wishlist) &&
        props.wishlist.all_wishlist.map((item, index) => (
          <div id="MYWISHLISTPAGE_CARD_MAIN_BODY" key={item.id}>
            <Card id="MYWISHLISTPAGE_CARD">
              <div id="Heart_logo_productpage">
                {/* <div className="Heart_logo_under_productpage">
                      <div className="heart_logo_under_body_icon">
                        {item.icon2}                       
                      </div>
                    </div> */}
              </div>
              <CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.images}
                  alt={item.name}
                  id="MYWISHLIST_CARD_IMAGES"
                />
                <Typography variant="h5" component="h2" id="MYWISHLIST_HEADING_ONE">
                  {item.name}
                </Typography>
                <div id="MYWISHLISTPAGE_CARD_MRP_SECTION">
                  <Typography id="MYWISHLISTPAGE_CARD_PARAGRAPH_ONE">
                    MRP: {item.mrp}
                  </Typography>
                  <Typography id="MYWISHLISTPAGE_CARD_PARAGRAPHTWO">
                    Regular Price: {calculateRegularPrice(item.mrp, item.discountPercentage)}
                  </Typography>
                  <Typography id="MYWISHLISTPAGE_CARD_PARAGRAPH_THREE">
                    Discount Percentage: {item.discountPercentage}%
                  </Typography>
                </div>
              </CardContent>
              <div id="MYWISHLISTPAGE_BUTTON_CARD_SECTION">
                <Link id="MYWISHLISTAPAGE_lINK-BUTTON_SECTION">
                  Move To Bag
                </Link>
              </div>
            </Card>
          </div>
        ))}
          </div>
        </div>
        <div id="MYWISHLISTPAGE_NO_MORE_PRODUCT_SHOW">
          <h2 id="MYWISHLISTPAGE_NO_MORE_PRODUCT_SHOW_HEADING_ONE">
            No More Products to Show
          </h2>
        </div>
       
      </div>
    </>
  );
};
export default MyWishlistPage