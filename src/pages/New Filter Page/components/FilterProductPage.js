import React, { useState } from "react";
import "../../New Filter Page/styles/FilterProductPage.css";
import Filter from "../components/Filter";
import {
  AvailabilityData,
  AvgcustomerData,
  DealsandDiscountData,
  DiscountData,
  FilterCategoryData,
  FilterDeliveryData,
  PayonDeliveryData,
  PriceData,
} from "./FilterPageAllData";
import "../styles/Filter.css";

// import FilterCard from "../container/productCont";
// import ProductbyAge from "../components/ProductbyAge";
import ProductCont from "../container/productCont";
export const FilterProductdata = [
  {
    id: 1,
    sidemenu: "Popularity",
  },
  {
    id: 2,
    sidemenu: "Discount",
  },
  {
    id: 3,
    sidemenu: "Name",
  },
  {
    id: 4,
    sidemenu: "Customer Top Rated",
  },
  {
    id: 5,
    sidemenu: "New Arrivals",
  },
  {
    id: 6,
    sidemenu: "Price: High To Low",
  },
  {
    id: 7,
    sidemenu: "Price: Low To High",
  },
];

const FilterProductPage = ({ onChange }) => {
  const [select, setselect] = useState(true);
  const handler = () => {
    setselect("fafmfnm");
  };
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
    <>
      {/* <Filter /> */}
      {/* <ProductCont /> */}
      <div className="Filter_page_main_body">
        <div className="filter_page_left_side_main">
          <p className="sort_by_para_one">Sort By</p>
          {FilterProductdata.map((u) => (
            <div>
              <div className="filter_page_checkbox_side_flex">
                <input
                  type="checkbox"
                  className="filter_page_sidemenu_input_one"
                  onClick={handler}
                />
                <p className="filter_page_sidemenu_para">{u.sidemenu}</p>
              </div>
            </div>
          ))}

          <p className="filter_page_category_para_one">Category</p>
          <p className="filter_page_category_para_two">
            Baby diapers & wipes store
          </p>
          {FilterCategoryData.map((c) => (
            <>
              <div id="category_filter_title">
                <p className="category_filter_title_para">{c.title}</p>
              </div>
            </>
          ))}

          <p className="filter_delivery_title_para">Delivery Day</p>
          {FilterDeliveryData.map((d) => (
            <>
              <div className="filter_delivery_flex_one">
                <input type="checkbox" className="filter_delivery_input_one" />
                <p className="filter_delivery_input_para_one">{d.title}</p>
              </div>
            </>
          ))}
          <p className="filter_pay_on_delivery_title">Pay On Delivery</p>
          {PayonDeliveryData.map((p) => (
            <>
              <div className="pay_on_delivery_flex_one">
                <input type="checkbox" className="pay_on_delivery_input_one" />
                <p className="pay_on_delivery_para_one">{p.title}</p>
              </div>
            </>
          ))}
          <p className="Deals_and_discount_para_one">Deals & Discounts</p>
          {DealsandDiscountData.map((dis) => (
            <>
              <div className="Deals_and_discount_felx_one">
                <input
                  type="checkbox"
                  className="Deals_and_discount_input_one_page"
                />
                <p className="Deals_and_discount_para_one_two">{dis.title}</p>
              </div>
            </>
          ))}
          <p className="Disount_filter_para">Discount</p>
          {DiscountData.map((discount) => (
            <>
              <div>
                <p className="discount_data_paragraph">{discount.title}</p>
              </div>
            </>
          ))}
          <p className="Price_all_under_para_one">Price</p>
          {PriceData.map((p) => (
            <>
              <div className="Price_data_flex_one">
                <p className="price_data_all_title">{p.price}</p>
              </div>
            </>
          ))}
          <p className="avg_customer_para_one">Avg. Customer Review</p>
          {AvgcustomerData.map((avg) => (
            <>
              <div className="avg_customer_flex-one">
                <p className="avg_customer_star_para_one">{avg.stars}</p>
              </div>
            </>
          ))}
          <p className="Availability_para_title">Availability</p>
          {AvailabilityData.map((avail) => (
            <>
              <div className="availability_flex_one">
                <input type="checkbox" className="availability_input_one" />
                <p className="availability_input_para_one">{avail.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* <div className="filter_page_right_side_main"> */}
      {/* <FilterCard /> */}
      {/* <FilterPageCard /> */}
      {/* </div> */}
    </>
  );
};
export default FilterProductPage;
