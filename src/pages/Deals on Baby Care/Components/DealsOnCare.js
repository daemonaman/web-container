import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Components/DealsOnCare.css";
import "owl.carousel";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DealsOnCare = (props) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    props.ViewAllProducts(props.login.admin_id);
  }, []);
  console.log(props.products.all_product_view);
  const handleLoginPopup = () => {
    alert("Please log in to add to bag");
  };
  return (
    <div className="dealcards">
      <div className="Deal_head">
        <h2>Deals on Baby Care</h2>
      </div>
      <div className="dealson-owl">
      <OwlCarousel
      mouseDrag={false}
      loop={true}
      touchDrag={false}
      lazyLoad={true}
      items={4}
      slideBy={1}
      nav={true}
      responsive={{
        1450: {
          items: 4,
          slideBy: 1,
        },
        1250: {
          items: 4,
          slideBy: 1,
        },
        1100: {
          items: 4,
          slideBy: 1,
        },
        900: {
          items: 2,
          slideBy: 1,
        },
        540: {
          items: 1,
          slideBy: 1,
        },
      }}
      dots={true}
      autoplay={true}
      autoplayTimeout={3000}
      animateIn="fadeIn"
      autoplayHoverPause={false}
    >
      {Array.isArray(props.products.all_product_view) &&
        props.products.all_product_view.map((items) => {
          return (
            <Link to="" key={items.id}>
              <Card
                sx={{
                  maxWidth: 305,
                  borderRadius: "0px 0px 10px 10px",
                  border: "1px solid rgba(11, 11, 11, 0.30)",
                  background: "#fff",
                }}
                className="deals-card-material"
              >
                <div
                  style={{
                    height: "40vh",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Slider {...settings}>
                    {items.images.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <img
                          src={image}
                          alt={`Image ${index}`}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                  >
                    Up to {items.discountPercentage}% off
                  </Button>
                  <Button size="small" sx={{ color: "red" }}>
                    Deals of the Day
                  </Button>
                </CardActions>
                <CardContent
                  sx={{
                    textAlign: "left",
                    marginTop: "-1.5rem",
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "left" }}
                  >
                    {items.description.length > 50
                      ? `${items.description.slice(0, 50)}...`
                      : items.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
    </OwlCarousel>
      </div>
    </div>


  );
};
export default DealsOnCare;
