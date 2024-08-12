import React, { useState } from "react";
import "../styles/Filter.css";

function Filter() {
  const [checkboxes, setCheckboxes] = useState({
    popularity: false,
    discount: false,
    name: false,
    topRated: false,
    newArrivals: false,
    priceLow: false,
    priceHigh: false,
    getToday: false,
    getTomorrow: false,
    payOnDelivery: false,
    allDiscounts: false,
    todaysDeals: false,
    includeOutOfStock: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes({ ...checkboxes, [name]: !checkboxes[name] });
  };

  const checkboxLabels = {
    popularity: "Popularity",
    discount: "Discount",
    name: "Name",
    topRated: "Customer Top Rated",
    newArrivals: "New Arrivals",
    priceLow: "Price Low",
    priceHigh: "Price High",
  };

  return (
    <div className="filter_main">
      <div className="filter_main_div">
        <div>
          <p className="filter_sortby">Sort By</p>
          <div className="filter_sortby_list">
            {Object.keys(checkboxLabels).map((key) => (
              <div
                key={key}
                className="rowdiv"
                style={{ display: "flex", gap: "20px", marginLeft: "4%" }}
              >
                <input
                  className="filter_sortby_checkbox_list"
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={checkboxes[key]}
                  onChange={() => handleCheckboxChange(key)}
                />
                <label htmlFor={key}>{checkboxLabels[key]}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="filter_sortby">Category</p>
          <h4 style={{textAlign:'center'}}>
            Baby diapers & wipes store
          </h4>
          <div className="filter_sortby_list">
            <p id="filter_getit"> Baby Care</p>
            <p id="filter_getit"> Baby Clothing </p>
            <p id="filter_getit">Bedding, Furniture & Room Decor</p>
            <p id="filter_getit">Diapering & Nappy Changing</p>
            <p id="filter_getit">Feeding</p>
            <p id="filter_getit">Potty Training & Step Stools</p>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Delivery Day</p>
          <div style={{ display: "flex", gap: "20px", marginLeft: "4%" }}>
            <input
              type="checkbox"
              id="getToday"
              name="getToday"
              checked={checkboxes.getToday}
              onChange={() => handleCheckboxChange("getToday")}
            />
            <label htmlFor="getToday" id="filter_getit">
              Get it today
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px", marginLeft: "4%" }}>
            <input
              type="checkbox"
              id="getTomorrow"
              name="getTomorrow"
              checked={checkboxes.getTomorrow}
              onChange={() => handleCheckboxChange("getTomorrow")}
            />
            <label htmlFor="getTomorrow" id="filter_getit">
              Get it tomorrow
            </label>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Pay On Delivery</p>
          <div style={{ display: "flex", gap: "10px", marginLeft: "4%" }}>
            <input
              type="checkbox"
              id="payOnDelivery"
              name="payOnDelivery"
              checked={checkboxes.payOnDelivery}
              onChange={() => handleCheckboxChange("payOnDelivery")}
            />
            <label htmlFor="payOnDelivery" id="filter_getit">
              Eligible for Pay On Delivery
            </label>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Deals & Discounts</p>
          <div style={{ display: "flex", gap: "10px", marginLeft: "4%" }}>
            <input
              type="checkbox"
              id="allDiscounts"
              name="allDiscounts"
              checked={checkboxes.allDiscounts}
              onChange={() => handleCheckboxChange("allDiscounts")}
            />
            <label htmlFor="allDiscounts" id="filter_getit">
              All Discounts
            </label>
          </div>

          <div style={{ display: "flex", gap: "10px", marginLeft: "4%" }}>
            <input
              type="checkbox"
              id="todaysDeals"
              name="todaysDeals"
              checked={checkboxes.todaysDeals}
              onChange={() => handleCheckboxChange("todaysDeals")}
            />
            <label htmlFor="todaysDeals" id="filter_getit">
              Today's Deals
            </label>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Discount</p>
          <div className="filter_sortby_list">
            <p id="filter_getit">10% Off or more</p>
            <p id="filter_getit">25% Off or more</p>
            <p id="filter_getit">35% Off or more</p>
            <p id="filter_getit"> 50% Off or more</p>
            <p id="filter_getit">60% Off or more</p>
            <p id="filter_getit">70% Off or more</p>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Price</p>
          <div className="filter_sortby_list">
            <p id="filter_getit"> Under ₹500 </p>
            <p id="filter_getit">₹500 - ₹1,000</p>
            <p id="filter_getit"> ₹1,000 - ₹2,000</p>
            <p id="filter_getit"> ₹2,000 - ₹5,000</p>
            <p id="filter_getit"> Over ₹5,000</p>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Avg. Customer Review</p>
          <div className="filter_sortby_list">
            <p id="filter_getit"> 4 Stars & Up & Up</p>
            <p id="filter_getit">3 Stars & Up & Up</p>
            <p id="filter_getit">2 Stars & Up & Up </p>
            <p id="filter_getit"> 1 Star & Up & Up</p>
          </div>
        </div>

        <div>
          <p className="filter_sortby">Availability</p>
          <div style={{ display: "flex", gap: "10px", marginLeft: "4%" }}>
            <input
              type="checkbox"
              id="includeOutOfStock"
              name="includeOutOfStock"
              checked={checkboxes.includeOutOfStock}
              onChange={() => handleCheckboxChange("includeOutOfStock")}
            />
            <label htmlFor="includeOutOfStock" id="filter_getit">
              Include Out of Stock
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
