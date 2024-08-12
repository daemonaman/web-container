import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../Component/BlogsDesc.css";
import diaper from "../../../Assets/whyusediaper.png";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import apporvallogo from '../../../Assets/Approval.png'
import { Link } from "react-router-dom";
// import Typography from '@mui/material/Typography';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: 220,
  borderRadius: '10px',
  border: "none",
};

const BlogsDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Grid sx={{ marginBottom: "5rem" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          margin: "1rem 9rem",
        }}
        className="blogs-details-main"
      >
        <IoIosCloseCircleOutline
          fontSize={43}
          onClick={() => navigate("/becomeseller")}
        />
      </Grid>
      <h3 style={{ textAlign: "center", fontSize: "28px", fontWeight: "bolder", marginBottom: "2rem", letterSpacing: "2px" }}>REGISTRATION FORM</h3>
      <Grid>
        <div className="blogs-container">
          {/* <form className="blogs-form"> */}
          <div>
            <label>
              BUSINESS NAME<span>*</span>
              <input type="text" className="blogs-form-input" />
            </label>
            <div className="form-group">
              <label>BUSINESS OWNER NAME<span>*</span></label>
              <div className="name-fields">
                <input type="text" placeholder="FIRST NAME" required className="input-text" />
                <input type="text" placeholder="LAST NAME" required className="input-text" />
              </div>
            </div>
            <div className="form-group">
              <label>GST (GOODS AND SERVICES TAX)<span>*</span></label>
              <div className="verify-field">
                <input type="text" placeholder="XX XXXXXXXXXX XXX" required className="input-text" />
                <button type="button">VERIFY</button>
              </div>
            </div>
            <div className="form-group">
              <label>ADDHAR NUMBER<span>*</span></label>
              <div className="verify-field">
                <input type="text" placeholder="XXXX XXXX XXXX" required className="input-text" />
                <button type="button">VERIFY</button>
              </div>
            </div>
            <div className="form-group">
              <label>PAN (PERMANENT ACCOUNT NUMBER)<span>*</span></label>
              <div className="verify-field">
                <input type="text" placeholder="ENTER YOUR PAN NUMBER" required className="input-text" />
                <button type="button">VERIFY</button>
              </div>
            </div>
            <div className="form-group">
              <label>EMAIL ADDRESS<span>*</span></label>
              <input type="email" placeholder="ENTER EMAIL ADDRESS" required className="input-email" />
            </div>
            <div className="form-group">
              <label>PHONE NUMBER<span>*</span></label>
              <input type="tel" placeholder="ENTER PHONE NUMBER" required className="input-tel" />
            </div>
            <div className="blogs-button-main">
              {/* <button className="submit-btn" onClick={openModal}>SUBMIT</button> */}
              <button onClick={handleOpen} className="submit-btn">Submit</button>
              <Modal
                keepMounted
                open={open}
                onClose={handleClose} className=""
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  <img src={apporvallogo} className="approval-logo" />
                  <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{ marginTop: "10px", textAlign: "center" }}>
                    Thank You !
                  </Typography>
                  <Typography id="keep-mounted-modal-description" sx={{ mt: -1, fontSize: 14, color: "#000" }}>
                    Your form will be under review.
                    Thanks!
                  </Typography>
                  <div className="blogs-contact-main">
                    <Link to='/contactus'>
                      <button className="blogs-contact-main-button">CONTACT US</button>
                    </Link>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          {/* </form> */}
        </div>
      </Grid>
    </Grid>
  );
};
export default BlogsDetails;



