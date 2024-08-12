import { Button, Grid, Typography } from "@mui/material";
import { Checkbox, MenuItem, TextField, Popover } from "@mui/material";
import img1 from "../../Assets/feedingBotel.png";
import "./orderSummary.css";
import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function OrderSummary() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [value, setValue] = React.useState(2);

  const PinkButton = styled(Button)({
    backgroundColor: "#FF70A6",
    color: "#fff", // Text color
    "&:hover": {
      backgroundColor: "#FF70A6", // Maintain the same color on hover
    },
  });

  const items = [
    {
      id: 1,
      name: "LuvLap Silicone Food/Fruit Nibbler with Extra Mesh, Soft Pacifier/Feeder, Teether for Baby, Infant, Bunny Violet & Pink",
      stock: "In stock",
      color: "Colour: Violet & Pink",
      MRP: "MRP: ₹199",
      price: "₹ 154",
      discount: "23% Off",
      rating: 4.2,
      totalRatings: 9682,
      quantity: 1,
    },
  ];

  const [quantity, setQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    handleClose();
  };

  return (
    <>
      <Grid style={{ fontFamily: "Calibri" }}>
        {items.map((item) => (
          <Grid
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "856px",
              marginBottom: "5%",
            }}
          >
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <img style={{ width: "260px", height: "260px" }} src={img1}></img>

            <Grid>
              <Grid className="orderSummary-maintxt">
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#0B0B0B",
                    alignItems: "flex-start",
                    textalign: "left",
                  }}
                >
                  {item.name}
                </Typography>

                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "#FF70A6",
                    }}
                  >
                    {item.stock}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#0B0B0B",
                    }}
                  >
                    {item.color}
                  </Typography>
                </Grid>
                <Grid className="orderSummary-txt1">
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "#00000099",
                      marginTop: "1%",
                      textDecoration: "line-through",
                    }}
                  >
                    {item.MRP}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "25px",
                      fontWeight: 400,
                      color: "#0B0B0B",
                    }}
                  >
                    {item.price}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#FF70A6",
                      marginTop: "1%",
                    }}
                  >
                    {item.discount}
                  </Typography>
                </Grid>
                <Grid className="orderSummary-txt2">
                  <Box
                    sx={{
                      "& .MuiRating-iconEmpty:hover": { color: "#FFD700" },
                    }}
                  />
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "#0B0B0B",
                    }}
                  >
                    {item.rating}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "#0B0B0B",
                    }}
                  >
                    {item.totalRatings}
                  </Typography>
                </Grid>
                <Grid className="orderSummary-txt3">
                  <Grid
                    container
                    justifyContent="flex-start"
                    style={{ width: "150px", marginLeft: "0" }}
                  >
                    <TextField
                      value={`Qty: ${quantity}`}
                      onClick={handleOpen}
                      InputProps={{
                        endAdornment: <ArrowDropDownIcon />,
                      }}
                      style={{ width: "100px", backgroundColor: "#FF70A6" }}
                    />
                    <Popover
                      open={Boolean(anchorEl)}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      {[...Array(10).keys()].map((num) => (
                        <MenuItem
                          key={num + 1}
                          onClick={() => handleQuantityChange(num + 1)}
                        >
                          {num + 1}
                        </MenuItem>
                      ))}
                    </Popover>
                  </Grid>
                  <Button style={{ fontSize: "15px", fontWeight: "300" }}>
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent="center"
        style={{ width: "150px", marginLeft: "60%" }}
      >
        <PinkButton
          style={{ width: "100px", marginTop: "30%", marginBottom: "40%" }}
          variant="contained"
        >
          Next
        </PinkButton>
      </Grid>
    </>
  );
}
export default OrderSummary;
