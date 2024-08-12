import React, { useEffect } from "react";
import "../Component/Bestseller.css";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const largescreen = useMediaQuery("()");

  return (
    <>
      <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
        <Typography
          sx={{
            fontFamily: "calibri",
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 600,
          }}
        >
          Sell Online with Kidtryz
        </Typography>
        <Typography
          sx={{
            padding: "1rem 8rem",
            textAlign: "center",
            fontWeight: 500,
            fontFamily: "calibri",
            fontSize: "22px",
            margin: "0px 35px",
          }}
        >
          Welcome to Kidtryz, your ultimate platform for buying and selling
          children's items with ease and convenience! Whether you're looking to
          declutter your home by selling outgrown toys and clothes or you're on
          the hunt for quality pre-loved items at great prices, Kidtryz is here
          to make your experience seamless and enjoyable.
        </Typography>
        <Grid className="sell-but-main">
          <Link to="/blogsdetails">
            <button className="selling-button">Start Selling</button>
          </Link>
        </Grid>
        <Grid style={{ margin: "2rem 5rem" }} className="sell-kidtryz">
          <h2>Why Sell with Kidtryz?</h2>
          <ul>
            <li>
              <span
                style={{
                  fontFamily: "calibri",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                1. User-Friendly Interface:
              </span>
              Our platform is designed with simplicity in mind. Listing your
              items is quick and easy, allowing you to upload photos, write
              descriptions, and set prices in just a few steps.
            </li>
            <li>
              <span
                style={{
                  fontFamily: "calibri",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                2. Targeted Audience:
              </span>
              Reach a dedicated community of parents and caregivers who are
              specifically looking for children's items. Your listings will be
              seen by buyers who are already interested in what you have to
              offer.
            </li>
            <li>
              <span
                style={{
                  fontFamily: "calibri",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                {" "}
                3. Safe and Secure Transactions:
              </span>
              We prioritize your safety and security. Kidtryz offers secure
              payment options and ensures that all transactions are protected,
              giving you peace of mind.
            </li>
            <li>
              <span
                style={{
                  fontFamily: "calibri",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                4. Sustainable Shopping:
              </span>
              By selling with Kidtryz, you're contributing to a more sustainable
              future. Help other families find joy in the items your children
              have outgrown, and promote the reuse of quality goods.
            </li>
            <li>
              <span
                style={{
                  fontFamily: "calibri",
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                {" "}
                5. Supportive Community:
              </span>
              Join a community of like-minded parents and caregivers. Share
              tips, discover new products, and support each other in the journey
              of parenting.
            </li>
          </ul>
        </Grid>
        <Grid style={{ margin: "3rem 5rem" }} className="how-get-section">
          <h3>How to Get Started?</h3>
          <div style={{ marginTop: "30px" }} className="how-get-section-two">
            <h4 style={{ padding: "10px" }}>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "calibri",
                }}
              >
                {" "}
                1. Sign Up:
              </span>
              Create your free account on Kidtryz. It’s quick and easy to get
              started.
            </h4>
            <h4 style={{ padding: "10px" }}>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "calibri",
                }}
              >
                2. List Your Items:
              </span>
              Take clear photos of your items, write detailed descriptions, and
              set your prices.
            </h4>
            <h4 style={{ padding: "10px" }}>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "calibri",
                }}
              >
                3. Connect with Buyers:
              </span>
              Respond to inquiries from interested buyers and arrange for
              shipping or local pickup.
            </h4>
            <h4 style={{ padding: "10px" }}>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "calibri",
                }}
              >
                {" "}
                4. Complete the Sale:
              </span>
              Receive secure payments directly through our platform and enjoy
              the extra space and cash!
            </h4>
          </div>
        </Grid>
        <Typography
          sx={{
            fontSize: "25px",
            fontFamily: "calibri",
            width: "75%",
            margin: "auto",
          }}
        >
          Join Kidtryz today and turn your gently used children's items into
          cash, while helping other families find what they need. Happy selling!
        </Typography>
      </div>
    </>
  );
};
export default BestSeller;
