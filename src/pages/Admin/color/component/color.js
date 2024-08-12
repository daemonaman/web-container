import React, { Component } from "react";
import {
  Grid,
  CardContent,
  Box,
  IconButton,
  Button,
  Typography,
  Icon,
  DialogActions,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Navigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoaderCon from "../../../../common/loader/containers/loader_cont";
// import "../../style/color.css"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Snackbar from "../../../../common/snackbar/components/snackbar";

export default class color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      delete: false,
      add: false,
      view: false,
      imageUrl: null,
      imageAlt: null,
      color_code: "",
      color_name: "",
    };
  }
  componentDidMount() {
    this.props.viewAllColor();
  }

  render() {
    const { all_color, snackbar, close_snack_bar } = this.props;
    const { imageUrl, imageAlt } = this.state;
    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }
    return (
      <Grid>
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Box className="colorname">
            <center>
              <Button style={{ color: "white ", textAlign: "center" }}>
                COLOR
              </Button>
            </center>
          </Box>

          <Box style={{ marginRight: "23%" }}>
            <center style={{ borderRadius: 0 }}>
              <Button
                className="coloradd"
                style={{ color: "white ", textAlign: "center" }}
                onClick={() => {
                  this.setState({
                    add: true,
                  });
                }}
              >
                Add Color
              </Button>
            </center>
          </Box>
        </Grid>
        <Box
          marginLeft={"2.5%"}
          // marginTop={"%"}
          marginRight={"5%"}
        >
          <CardContent style={{ marginRight: "25%" }}>
            <TableContainer component={Paper}>
              <Table
                style={{ minWidth: 300 }}
                size="small"
                aria-label="a dense table"
                ref={this.tableRef}
              >
                <TableHead className="colorhead">
                  <TableRow>
                    <TableCell>Color Code</TableCell>
                    <TableCell>Color Name</TableCell>

                    <TableCell style={{ marginRight: "2px" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="colorbody">
                  {all_color.all_color.map((c) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>{c.color_code}</TableCell>
                        <TableCell>{c.color_name}</TableCell>

                        <TableCell>
                          <Tooltip title="Edit">
                            <IconButton
                              onClick={() => {
                                this.setState({
                                  edit: true,
                                  _id: c._id,
                                  color_name: c.color_name,
                                  color_code: c.color_code,
                                });
                              }}
                              style={{ marginLeft: "-5px" }}
                            >
                              <EditOutlinedIcon style={{ color: "green" }} />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <Dialog
            open={this.state.edit}
            style={{
              height: "700px",
            }}
          >
            <Grid
              style={{
                backgroundColor: "#fff",
                height: "220px",
                minWidth: "320px",
                scrollBehavior: "smooth",
                overflow: "revert-layer",
                alignSelf: "center",
                overflowX: "hidden",
                flexDirection: "row",
                display: "flex",
                overflowY: "hidden",
              }}
            >
              <Grid>
                <div
                  class="input-group mb-3"
                  style={{ marginLeft: "20px", marginTop: "20px" }}
                >
                  <TextField
                    required={true}
                    id="outlined-required"
                    label="Color Id"
                    InputLabelProps={{ shrink: true, required: true }}
                    style={{ height: "50px", width: "280px" }}
                    value={this.state.color_code}
                    onChange={(e) => {
                      this.setState({ color_code: e.target.value });
                    }}
                  />
                </div>

                <div class="input-group mb-3" style={{ marginLeft: "20px" }}>
                  <TextField
                    required={true}
                    id="outlined-required"
                    label="Color Name"
                    InputLabelProps={{ shrink: true, required: true }}
                    style={{ height: "50px", width: "280px" }}
                    value={this.state.color_name}
                    onChange={(e) => {
                      this.setState({ color_name: e.target.value });
                    }}
                  />
                </div>

                <Button
                  className="btns"
                  disabled={
                    this.state.color_name === "" || this.state.color_code === ""
                  }
                  onClick={() => {
                    this.props.updateColor(
                      this.state._id,
                      this.state.color_name,
                      this.state.color_code
                    );
                    this.setState({ edit: false });
                  }}
                  style={{
                    marginLeft: "20px",
                    marginBottom: "30px",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Update
                </Button>
                <Button
                  className="btns"
                  onClick={() => {
                    this.setState({ edit: false });
                  }}
                  style={{
                    marginLeft: "20px",
                    marginBottom: "30px",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Dialog>
          <Dialog
            open={this.state.delete}
            onClose={() => {
              this.setState({ delete: false });
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            style={{ width: "100%", height: "100%" }}
          >
            {/* <IconButton
                    > */}
            <HighlightOffOutlinedIcon
              style={{
                fontSize: "60",
                color: "red",
                fontWeight: "100",
                marginLeft: "80",
                marginTop: "20",
              }}
            />
            {/* </IconButton> */}
            <DialogTitle style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Are You Sure ?
            </DialogTitle>

            <DialogActions style={{ marginTop: "15px", marginRight: "0px" }}>
              <Button
                className="delete"
                variant="contained"
                style={{}}
                onClick={() => {
                  this.setState({ delete: false });
                }}
              >
                Cancel
              </Button>
              <Button
                className="delete"
                variant="contained"
                onClick={() => {
                  this.props.deleteColor(this.state._id);
                  this.setState({ delete: false });
                }}
              >
                Confirm
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.add}
            // onClose={() => {
            //     this.setState({ add: false });
            // }}
            // style={{wi}}
            style={{
              // top: "50%",
              // left: "10%",
              // right: "auto",
              // bottom: "auto",
              // marginRight: "-50%",
              // transform: "translate(-50%, -50%)",
              // width: "1000px",
              // marginLeft: "500px",
              // paddingTop: "40px",
              // paddingLeft: "25px",
              // paddingRight: "25px",
              // borderRadius: "0px",
              height: "700px",
              // zIndex: "200",
              // backgroundColor: "#fff"
            }}
          >
            <Grid
              style={{
                backgroundColor: "#fff",
                height: "220px",
                minWidth: "330px",
                scrollBehavior: "smooth",
                overflow: "revert-layer",
                alignSelf: "center",
                overflowX: "hidden",
                flexDirection: "row",
                display: "flex",
                overflowY: "hidden",
              }}
            >
              <Grid>
                <div
                  class="input-group mb-3"
                  style={{ marginLeft: "20px", marginTop: "20px" }}
                >
                  {/* <textarea
                                id="standard-password-input"
                                label="Name"
                                type="text"
                                variant="standard"
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                            /> */}
                  <TextField
                    required
                    id="outlined-required"
                    label="Color Code"
                    InputLabelProps={{ shrink: true, required: true }}
                    style={{ height: "50px", width: "280px" }}
                    onChange={(e) => {
                      this.setState({ color_code: e.target.value });
                    }}
                  />
                </div>

                <div class="input-group mb-3" style={{ marginLeft: "20px" }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Color Name"
                    InputLabelProps={{ shrink: true, required: true }}
                    style={{ height: "50px", width: "280px" }}
                    onChange={(e) => {
                      this.setState({ color_name: e.target.value });
                    }}

                    // onChange={(e) => { this.setState({ name: e.target.value }) }}
                  />
                </div>

                <Button
                  className="btns"
                  disabled={
                    this.state.color_name === "" && this.state.color_code === ""
                  }
                  onClick={() => {
                    this.props.createColor(
                      this.state.color_name,
                      this.state.color_code
                    );
                    this.setState({ add: false });
                  }}
                  style={{
                    marginLeft: "20px",
                    marginBottom: "30px",
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  Add
                </Button>
                <Button
                  className="btns"
                  onClick={() => {
                    this.setState({ add: false });
                  }}
                  style={{
                    marginLeft: "20px",
                    color: "white",
                    marginBottom: "30px",
                    marginTop: "20px",
                  }}
                >
                  Close
                </Button>
              </Grid>
            </Grid>
          </Dialog>
        </Box>
        <LoaderCon />
        <Snackbar
          open={snackbar.response_received}
          close_snack_bar={close_snack_bar}
          message={snackbar.message}
        />
      </Grid>
    );
  }
}
