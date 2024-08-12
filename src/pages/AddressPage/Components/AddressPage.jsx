/** @format */

import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../Styles/AddressPage.css";
import { Link } from "react-router-dom";
function AddressPage(props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const nexttotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = React.useState(false);
  const [editopen, SetEditOpen] = useState(false);

  const [fullname, setfullname] = useState("");
  const [phone, setphone] = useState("");
  const [pincode, setpincode] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [landmark, setlandmark] = useState("");
  const [house_number, sethouse_number] = useState("");
  const [editfullname, seteditfullname] = useState("");
  const [editphone, seteditphone] = useState("");
  const [editpincode, seteditpincode] = useState("");
  const [editstate, seteditstate] = useState("");
  const [editcity, seteditcity] = useState("");
  const [editlandmark, seteditlandmark] = useState("");
  const [edithouse_number, setedithouse_number] = useState("");
  const [id, setaddressId] = useState("");

  const handleSaveAttribute = () => {
    props.addAddress(
      props.login.admin_id,
      fullname,
      phone,
      pincode,
      state,
      city,
      landmark,
      house_number
    );
    setOpen(false);
    setfullname("");
    setphone("");
    setpincode("");
    setstate("");
    setcity("");
    setlandmark("");
    sethouse_number("");
  };

  const handleEditAttribute = () => {
    props.UpdateAddress(
      id,
      props.login.admin_id,
      editfullname,
      editphone,
      editpincode,
      editstate,
      editcity,
      editlandmark,
      edithouse_number
    );
    SetEditOpen(false);
    seteditfullname("");
    seteditphone("");
    seteditpincode("");
    seteditstate("");
    seteditcity("");
    seteditlandmark("");
    setedithouse_number("");
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected Value:", event.target.value);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleEditOpenDialog = () => {
    SetEditOpen(true);
  };

  const handleEditCloseDialog = () => {
    SetEditOpen(false);
  };

  useEffect(() => {
    props.viewAddress(props.login.admin_id);
    return () => {};
  }, []);
  // console.log(props.address.all_address);

  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div
        style={{ position: "relative", height: "max-content", padding: "20px" }}
      >
        <Grid spacing={3} style={{ padding: "20px" }}>
          <Grid item xs={12} style={{ marginBottom: "20px" }}>
            <div
              style={{
                position: "relative",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Grid alignItems="center" justifyContent="space-between">
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleOpenDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF70A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: "8px", verticalAlign: "middle" }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <Typography style={{ color: "#FF70A6", fontSize: "20px" }}>
                    Add a New Address
                  </Typography>
                </Button>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div
              style={{
                position: "relative",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <Grid spacing={2}>
                <Grid item xs={12}>
                  <RadioGroup value={selectedValue} onChange={handleChange}>
                    {Array.isArray(props.address.all_address) &&
                      props.address.all_address.map((item) => (
                        <div
                          key={item._id}
                          style={{
                            marginBottom: "20px",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "20px",
                          }}
                        >
                          <FormControlLabel
                            value={item._id}
                            control={<Radio color="primary" />}
                            label={
                              <div>
                                <Grid alignItems="center">
                                  <Typography>{item.fullName}</Typography>
                                  <Button
                                    onClick={() => {
                                      handleEditOpenDialog();
                                      setEdit(true);
                                      setaddressId(item._id);
                                      seteditfullname(item.fullName);
                                      seteditphone(item.phoneNumber);
                                      seteditpincode(item.pinCode);
                                      seteditstate(item.state);
                                      seteditcity(item.city);
                                      seteditlandmark(item.landmark);
                                      setedithouse_number(item.houseNo);
                                      setSelectedValue(item._id);
                                    }}
                                    variant="outlined"
                                    style={{
                                      backgroundColor: "#FF70A6",
                                      color: "#FFFFFF",
                                      border: "none",
                                    }}
                                  >
                                    Edit
                                  </Button>
                                </Grid>
                                <Typography
                                  variant="body2"
                                  style={{
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    textAlign: "left",
                                  }}
                                >
                                  {item.houseNo}, {item.landmark},<br />
                                  {item.city}, {item.state} - {item.pinCode}
                                  <br />
                                  Phone: {item.phoneNumber}
                                </Typography>
                              </div>
                            }
                          />
                        </div>
                      ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </div>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Link to="/payment">
                {" "}
                <Button
                  // onClick={handleNext}
                  onClick={nexttotop}
                  variant="contained"
                  style={{
                    backgroundColor: "#FF70A6",
                    color: "#FFFFFF",
                    width: "10vw",
                    height: "6vh",
                  }}
                >
                  Next
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid>  this a adress page for a ecom website can you make it well and structure  or design a eyecatching  */}
        {/* Dialog Box for Adding New Address */}
        <Dialog open={open} onClose={handleCloseDialog}>
          <DialogTitle>Add a New Address</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                autoFocus
                margin="dense"
                id="fullName"
                label="Full Name"
                type="text"
                fullWidth
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
              />
              <TextField
                margin="dense"
                id="phoneNumber"
                label="Phone Number"
                type="text"
                fullWidth
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
              <TextField
                margin="dense"
                id="pinCode"
                label="Pin Code"
                type="text"
                fullWidth
                value={pincode}
                onChange={(e) => setpincode(e.target.value)}
              />
              <TextField
                margin="dense"
                id="state"
                label="State"
                type="text"
                fullWidth
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
              <TextField
                margin="dense"
                id="city"
                label="City"
                type="text"
                fullWidth
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
              <TextField
                margin="dense"
                id="landmark"
                label="Landmark"
                type="text"
                fullWidth
                value={landmark}
                onChange={(e) => setlandmark(e.target.value)}
              />
              <TextField
                margin="dense"
                id="houseNo"
                label="House No."
                type="text"
                fullWidth
                value={house_number}
                onChange={(e) => sethouse_number(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSaveAttribute} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={editopen} onClose={handleEditCloseDialog}>
          <DialogTitle>Edit Address</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                autoFocus
                margin="dense"
                id="fullName"
                label="Full Name"
                type="text"
                fullWidth
                value={editfullname}
                onChange={(e) => seteditfullname(e.target.value)}
              />
              <TextField
                margin="dense"
                id="phoneNumber"
                label="Phone Number"
                type="text"
                fullWidth
                value={editphone}
                onChange={(e) => seteditphone(e.target.value)}
              />
              <TextField
                margin="dense"
                id="pinCode"
                label="Pin Code"
                type="text"
                fullWidth
                value={editpincode}
                onChange={(e) => seteditpincode(e.target.value)}
              />
              <TextField
                margin="dense"
                id="state"
                label="State"
                type="text"
                fullWidth
                value={editstate}
                onChange={(e) => seteditstate(e.target.value)}
              />
              <TextField
                margin="dense"
                id="city"
                label="City"
                type="text"
                fullWidth
                value={editcity}
                onChange={(e) => seteditcity(e.target.value)}
              />
              <TextField
                margin="dense"
                id="landmark"
                label="Landmark"
                type="text"
                fullWidth
                value={editlandmark}
                onChange={(e) => seteditlandmark(e.target.value)}
              />
              <TextField
                margin="dense"
                id="houseNo"
                label="House No."
                type="text"
                fullWidth
                value={edithouse_number}
                onChange={(e) => setedithouse_number(e.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEditAttribute} color="primary">
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default AddressPage;
