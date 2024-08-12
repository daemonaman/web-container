import React from "react";
import "../styles/Layout.css";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import AllSlidePage from "../../Images pages/container/ImagesPageCont";
import { RectanglePage } from "../../Rectanglepage/RectanglePage";
import FocusOnPage from "../../FocusonPage/FocusOnpage";
import { BeddingPage } from "../../Bedding Page/BeddingPage";
import { BathPage } from "../../BathPage/BathPage";
import { BabyfeddingPage } from "../../BabyFedding Page/BabyFeddingPage";
import { ViewmorePage } from "../../Viewmore Page/ViewmorePage";
import ShopbyAgePage from "../../ShopByAge Page/Container/shopByageCont";
import { CuratestorePage } from "../../Curatesstore Page/Curatespage";
// import { ExploreBrandPage } from "../../Explorebrand page/ExploreBrandPage";
import DealsOnCare from "../../Deals on Baby Care/Containers/DealsOnBayCont";
import ExploreBrandPage from "../../Explorebrand page/Components/ExploreBrandPage";
import ExploreBrandCont from "../../Explorebrand page/Container/ExploreBrandCont";
import { Typography } from "@mui/material";
const LayoutPage = (props) => {
  useEffect(() => {
    props.viewCategories();
    props.viewBanner();
    return () => {};
  }, []);
  // console.log(props.categories.all_categories);
  return (
    <>
      {/* <div id="Slidemarquee-container">
        <Marquee
          speed={20}
          className="MainMarquee"
          style={{
            backgroundColor: "#FF70A6",
            height: 195,
            overflow: "hidden",
          }}
        >
          {Array.isArray(props.categories.all_categories) &&
            props.categories.all_categories.map((items) => (
              <>
                <div>
                  <div id="Layoutpage_main_map_body">
                    {" "}
                    <Link
                      to={`/proucts/${items.cat_name}`}
                      onClick={() => {
                        props.setCatId(items.cat_name);
                        console.log(items.cat_name);
                      }}
                    >
                      <img src={items.logo} alt="" id="SlideImage1" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/proucts/${items._id}`}
                      onClick={() => {
                        props.setCatId(items.cat_name);
                        console.log(items.cat_name);
                      }}
                      id="SlideImageHeading1"
                    >
                      {items.cat_name}
                    </Link>
                  </div>
                </div>
              </>
            ))}
        </Marquee>
      </div> */}
      <div
        id="Slidemarquee-container"
        style={{
          position: "relative",
          overflow: "hidden",
          overflowX: "hidden",
          backgroundColor: "#fd99bf",
          display: "flex",
          alignItems: "center",
          border: "none",
          height: "135px",
        }}
      > 
        {/* Static content of the first category */}
        {Array.isArray(props.categories.all_categories) &&
          props.categories.all_categories.length > 0 && (
            <div id="static-category">
              <div id="Layoutpage_main_map_body">
                <Link
                  to={`/products/${props.categories.all_categories[0].cat_name}`}
                  onClick={() => {
                    props.setCatId(props.categories.all_categories[0].cat_name);
                    console.log(props.categories.all_categories[0].cat_name);
                  }}
                >
                  <img
                    src={props.categories.all_categories[0].logo}
                    alt=""
                    id="SlideImage1"
                  />
                </Link>
              </div>
              <div>
                <Link
                  to={`/products/${props.categories.all_categories[0]._id}`}
                  onClick={() => {
                    props.setCatId(props.categories.all_categories[0].cat_name);
                    // console.log(props.categories.all_categories[0].cat_name);
                  }}
                  id="SlideImageHeading1"
                >
                  {/* {props.categories.all_categories[0].cat_name} */}
                  <p id="colla">Collaboration</p>
                </Link>
              </div>
            </div>
          )}
        {/* Sliding container for the remaining categories */}
        <Marquee
          speed={0}
          className="MainMarquee"
          style={{
            whiteSpace: "nowrap",
            overflowX: "auto",
            height: "195px",
            scrollbarWidth: "none",
            marginLeft: "4px",
          }}
        >
          {/* Map over the remaining categories */}
          {Array.isArray(props.categories.all_categories) &&
            props.categories.all_categories.slice(1).map((items, index) => (
              <div
                key={items._id}
                style={{
                  display: "flex",
                  // margin: "0px -0.001rem",
                  backgroundColor: index === 0 ? "#fd99bf" : "inherit",
                }}
              >
                <div id="Layoutpage_main_map_body">
                  <Link
                    to={`/products/${items.cat_name}`}
                    onClick={() => {
                      props.setCatId(items.cat_name);
                      console.log(items.cat_name);
                    }}
                  >
                    <img src={items.logo} alt="" id="SlideImage1" />
                     <p
                      style={{
                        marginTop: "-15px",
                        color: "#0f0d0e",
                        fontSize: "15px",
                      }}
                    >
                      {items.cat_name}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={`/products/${items._id}`}
                    onClick={() => {
                      props.setCatId(items.cat_name);
                      console.log(items.cat_name);
                    }}
                    id="SlideImageHeading1"
                  >  
                  </Link>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
      <AllSlidePage />
      <RectanglePage />
      <DealsOnCare />
      {/* <NcorouselPage /> */}
      {/* <NDealsOnPage/> */}
      <FocusOnPage />
      <BeddingPage />
      <BathPage />
      {Array.isArray(props.banner.all_banner) &&
        props.banner.all_banner.map((item, index) => (
          <div className="babyfeedimg">
            {item.categoryName === "home center" && (
              <img src={item.imageOrVideoUpload} alt="" id="GROUP_ONE_IMAGE" />
            )}
          </div>
        ))}
      <BabyfeddingPage />
      {Array.isArray(props.banner.all_banner) &&
        props.banner.all_banner.map((item, index) => (
          <div className="babyfeedimg">
            {item.categoryName === "flat 60% off" && (
              <img
                src={item.imageOrVideoUpload}
                alt=""
                id="GROUP_ONE_IMAGE"
                className="add-banner-carousel"
              />
            )}
          </div>
        ))}
      {/* <ViewmorePage /> */}
      {/* <CuratestorePage /> */}
      <ShopbyAgePage />
      {/* <ExploreBrandPage /> */}
      <ExploreBrandCont />
      {Array.isArray(props.banner.all_banner) &&
        props.banner.all_banner.map((item, index) => (
          <div id="EXPLOREAGEPAGE_BACKGROUNDIMAGE_ONE">
            {item.categoryName === "footer - 1" && (
              <div className="foot_1">
                <img
                  src={item.imageOrVideoUpload}
                  alt=""
                  id="EXPLOREPAGE_BACKGROUNDIMAGE_UNDER_ONE"
                />
              </div>
            )}
            {item.categoryName === "footer - 2" && (
              <div className="foot_3">
                <img
                  src={item.imageOrVideoUpload}
                  alt=""
                  id="EXPLOREPAGE_BACKGROUNDIMAGE_UNDER_ONE"
                />
              </div>
            )}
            <div>
              {item.categoryName === "footer - 3" && (
                <img
                  src={item.imageOrVideoUpload}
                  alt=""
                  id="EXPLOREPAGE_BACKGROUNDIMAGE_UNDER_ONE"
                />
              )}
            </div>
          </div>
        ))}
    </>
  );
};
export default LayoutPage;