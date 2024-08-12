import React, { useEffect } from "react";
import "../Components/ExploreBrandPage.css";
// import EXPLOREBACKGROUNDIMAGE from "../../Assets/Background Images34.png";
// import EXPLOREBACKGROUNDIMAGE2 from "../../Assets/Background Image35.png";
// import EXPLOREBACKGROUNDIMAGE3 from "../../Assets/Background Image36.png";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const ExploreBrandPage = (props) => {
  useEffect(() => {
    props.ViewBrands();
    return () => {};
  }, []);
  // console.log(props.brand.all_view_brand);
  return (
    <>
      <div id="EXPLOREPAGE_MAIN_BODY">
        <div id="EXPLOREPAGE_HEADING-CONTENT">
          <h3 id="EXPLOREPAGE_HEADING_ONE">Explore Our Featured Brands</h3>
        </div>
        <div className="brands-flex">
          {Array.isArray(props.brand.all_view_brand) &&
            props.brand.all_view_brand.slice(0, 4).map((items) => {
              return (
                <Card key={items.id}>
                  <CardMedia
                    component="img"
                    // height="300"
                    src={items.logo}
                    className="brand-logo-all"
                  ></CardMedia>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default ExploreBrandPage;
