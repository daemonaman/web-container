import React from "react";
import {
  Typography,
  Box,
  Rating,
  Button,
  Grid,
  CardMedia,
  Modal,
} from "@mui/material";
import profile from "../../../Assets/Ellipse 1.png";
import img from "../../../Assets/Rectangle 910.png";
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const Review = () => {
  const reviews = [
    {
      profile: profile,
      name: "Venumadhavi",
      rating: 5,
      date: "20 December 2023",
      color: "Violet & Purple",
      verified: true,
      text: "Super quality. I love the product. The pacifier has soft material which comforts baby gums and it has a holder so that baby can easy to hold the pacifier and easy to clean after using it.",
      img: img,
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleOpenModal = (img) => {
    setModalImage(img);
    setOpenModal(true);
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} sx={{ color: '#FFD700' }} />);
      } else {
        stars.push(<StarOutlineIcon key={i} sx={{ color: '#FFD700' }} />);
      }
    }
    return stars;
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: "100vw",
            maxHeight: "100vh",
            overflow: "auto",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <img
            src={modalImage}
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Modal>
      <Grid sx={{ background: "#F9F9F9", margin: "3rem 2rem" }}>
        <Grid sx={{}}>
          <Typography fontSize={"30px"} textAlign={"left"}>TopReview</Typography>
        </Grid>
        <Grid mt={"2rem"}>
          {reviews.map((review, index) => (
            <Grid key={index}>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <img src={review.profile} />
                <Typography variant="body1" ml={2}>
                  {review.name}
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" component="span" textAlign={'left'}>
                      Reviewed in India on {review.date}
                    </Typography>
                  </Box>
                  <Box mt={1}>
                {renderStars(review.rating)}
              </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "auto",
                    }}
                  >
                    <Typography variant="body2">
                      Colour: {review.color}
                    </Typography>
                    <Box
                      sx={{
                        borderLeft: "1px solid #0B0B0B",
                        marginLeft: "5px",
                        marginRight: "5px",
                        height: "15px",
                      }}
                    />
                    <Typography variant="body2" sx={{ color: "#FF70A6",textAlign:'left' }}>
                      {review.verified ? "Verified Purchase" : ""}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" textAlign={"left"}>{review.text}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    src={review.img}
                    alt=""
                    srcset=""
                    onClick={() => handleOpenModal(review.img)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined">Helpful</Button>
                  <Button
                    variant="text"
                    sx={{
                      color: " rgba(187, 187, 187, 0.70)",
                      fontFamily: "Calibri",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    Report
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Review;
