import * as React from "react";
import { Grid, Typography, Rating, Box, Button, Modal ,Dialog, DialogTitle, DialogContent, DialogActions, TextareaAutosize } from "@mui/material";
import img from "../../../Assets/Rectangle 910.png";
import { useState } from "react";
import Review from "./Review";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import './Rating.css'
import { IoIosCloseCircleOutline } from "react-icons/io";

const RatingReview = ({ value }) => {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState('');
  const images = [
    { id: 1, src: img },
    { id: 2, src: img },
    { id: 3, src: img },
    { id: 4, src: img },
    { id: 5, src: img },
    { id: 6, src: img },
    { id: 7, src: img },
    { id: 8, src: img },
  ];
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const ratingValue = 4.0;
  const maxRating = 5;
  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < 4) {
        stars.push(<StarIcon key={i} style={{ color: "#FFD700" }} />);
      } else {
        stars.push(<StarBorderIcon key={i} style={{ color: "#FFD700" }} />);
      }
    }
    return stars;
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission of the review data
    console.log('Review:', review);
    setOpen(false);
  };
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3rem 3rem",
        }}
      >
        <Grid item xs={12}>
          <Typography 
            variant="h6"
            sx={{
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Reviews & Ratings
          </Typography>
          <Typography variant="body1" textAlign={"left"}>
            Customer reviews
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {renderStars()}
            {ratingValue.toFixed(1)} out of 5 stars
          </Typography>
          <Typography variant="body1" textAlign={"left"}>
            9,682 global ratings
          </Typography>
        </Grid>
        <Grid>
          <div style={{ border: "1px solid #bdbdbd", height: "15vh" }}></div>
        </Grid>
        <Grid>
          <Typography variant="h2">4.0/5</Typography>
          <Typography variant="body1">
            Write a review and win 100 reward points !
          </Typography>
        </Grid>
        <Grid justifyContent="center" mt="1rem">
          <Button
            sx={{
              border: "1px solid rgba(11, 11, 11, 0.30)",
              color: "#02A6E2",
              width: "260px",
              height: "60px",
            }}
            onClick={handleOpen}
          >
            Write Review
          </Button>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
      <Grid sx={{ background: "#F9F9F9" }}>
        <Grid sx={{ margin: "3rem 2rem" }}>
          <Typography fontSize={"30px"}>Photos From Customers</Typography>
        </Grid>

        <Grid sx={{ display: "flex", justifyContent: "space-evenly" }} className="review-img">
          {images.map((image, index) => (
            <Grid key={image.id} item xs={12} sm={6} md={4} lg={3}>
              {index === images.length - 1 ? (
                <div style={{ position: "relative" }}>
                  <img src={image.src} alt="" />
                  <div
                    onClick={handleOpenModal}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{ color: "#ffffff", padding: "8px" }}
                    >
                      Total Images: {images.length}
                    </Typography>
                  </div>{" "}
                </div>
              ) : (
                <img src={image.src} alt="" />
              )}
            </Grid>
          ))}
        </Grid>
        <Review />
        <Review />
      </Grid>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
        <div
          style={{
            width: "50vw",
            height: "60vh",
            background: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
         <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Button onClick={handleCloseModal}>
          <IoIosCloseCircleOutline style={{ fontSize: '2rem', color: 'black' }} />
        </Button>
      </div>
          <div style={{ width: "100%", overflow: "auto" }}>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt=""
                style={{
                  justifyContent: "space-between",
                  width: "45%",
                  margin: "1rem 1rem",
                }}
              />
            ))}
          </div>
         
        </div>
      </Modal>
      <Dialog open={open} onClose={handleClose} style={{width:'100vw'}}>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent sx={{ width: '500px' }}>
          <TextareaAutosize
            value={review}
            onChange={handleChange}
            aria-label="Write your review"
            placeholder="Write your review here..."
            style={{ width: '100%', minHeight: '50vh',fontFamily:'calibri',fontSize:'19px' }}          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RatingReview;
