import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./PreDeliveryComboStyles.css";
import { preDeliveryProducts } from './PreDeliveryComboData';

const PreDeliverCombo = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="main_container">
      <div className='main_head_title'>
          <h2>Pre Delivery Combo</h2>
      </div>
      <div className="container_box">
        <div className="left_section">
            <div className="content_box">
              <h2>Sort By</h2>
              <div className="content">
                <FormControlLabel
                  control={<Checkbox id="popularity" />}
                  label="Popularity"
                />
                 <FormControlLabel
                  control={<Checkbox id="discount" />}
                  label="Discount"
                />
                <FormControlLabel
                  control={<Checkbox id="name" />}
                  label="Name"
                />
                <FormControlLabel
                  control={<Checkbox id="customer" />}
                  label="Customer Top Rated"
                />
                <FormControlLabel
                  control={<Checkbox id="new-arrivals" />}
                  label="New Arrivals"
                />
                <FormControlLabel
                  control={<Checkbox id="price-high-to-low" />}
                  label="Price: High To Low"
                />
                <FormControlLabel
                  control={<Checkbox id="price-low-to-high" />}
                  label="Price: Low To High"
                />
              </div>
            </div>

            <div className="content_box">
              <h2>Delivery Day</h2>
              <div className="content">
                <FormControlLabel
                  control={<Checkbox id="today" />}
                  label="Get It Today"
                />
                <FormControlLabel
                  control={<Checkbox id="tomorrow" />}
                  label="Get It by Tomorrow"
                />
              </div>
            </div>

            <div className="content_box">
              <h2>Pay On Delivery</h2>
              <div className="content">
                <FormControlLabel
                  control={<Checkbox id="pay-on-delivery" />}
                  label="Eligible for Pay On Delivery"
                />
              </div>
            </div>

            <div className="content_box">
              <h2>Deals & Discounts</h2>
              <div className="content">
                <FormControlLabel
                  control={<Checkbox id="all-discounts" />}
                  label="All Discounts"
                />
                <FormControlLabel
                  control={<Checkbox id="todays-deals" />}
                  label="Today's Deals"
                />
              </div>
            </div>

            <div className="content_box">
              <h2>Discount</h2>
              <div className="content_details">
                <p>10% Off or more</p>
                <p>25% Off or more</p>
                <p>35% Off or more</p>
                <p>50% Off or more</p>
                <p>60% Off or more</p>
                <p>70% Off or more</p>
              </div>
            </div>

            <div className="content_box">
              <h2>Price</h2>
              <div className="content_details">
                <p>Under ₹500</p>
                <p>₹500 - ₹1,000</p>
                <p>₹1,000 - ₹2,000</p>
                <p>₹2,000 - ₹5,000</p>
                <p>Over ₹5,000</p>
              </div>
            </div>

            <div className="content_box">
              <h2 className='avg_customer'>Avg. Customer Review</h2>
              <div className="content_details">
                <p>4 Stars & Up</p>
                <p>3 Stars & Up</p>
                <p>2 Stars & Up</p>
                <p>1 Star & Up</p>
              </div>
            </div>

            <div className="content_box">
              <h2>Availability</h2>
              <div className="content">
                <FormControlLabel
                  control={<Checkbox id="out-of-stock" />}
                  label="Include Out of Stock"
                />
              </div>
            </div>

        </div>
        <div className="right_section">
          {preDeliveryProducts.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.Img} alt={`Product ${index + 1}`} />
              <div className="product_details">
                <h3>{product.details}</h3>
                  <div className="price_box">
                    <span className='product_mrp'>MRP:</span>
                    <span className='bef_disc'>₹{product.beforeDiscount}</span>
                    <span className='aft_disc'>₹{product.afterDiscount}</span>
                    <span className='divider'></span>
                    <span className='disc_off'>({product.percentageDiscount}% off)</span>
                  </div>

                  <div className="review">
                  {/* <Rating
                  name="simple-controlled"
                 value={value}
                 onChange={(event, newValue) => {
                 setValue(newValue);
                  }}
                   /> */}
                   <Rating name="read-only" value={value} readOnly />
                   <span className='review_point'>{product.reviewData}</span>
                    <span className="divider"></span>
                    <span className='review_person'>({product.reviewPerson})</span>
                  </div>
                  <button className="add-to-bag">Add to Bag</button>
              </div>
            </div>
          ))}

            <div className='help_box'>
              <p className='help_que'>Need help?</p>
              <p className='help_ans'>Visit the help section <span>or</span> contact us</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PreDeliverCombo;
