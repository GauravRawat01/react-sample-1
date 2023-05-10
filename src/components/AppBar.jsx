import React from "react";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppTitle from "./AppTitle";
import SaveViewBar from "./SaveViewBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "lightgrey",
    color: "black",
    height: "8vh",
    padding: "5px",
    width: "100%",
  },
  dropdownStyle: {
    minWidth: "13rem",
    alignItems: "center",
    marginBottom: "auto",
    marginTop: "0",
    marginLeft: "5rem",
  },
}));

function AppBar() {
  const classes = useStyles();
  const [shipper, setShipper] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setShipper(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.appBar}>
        <AppTitle />

        <FormControl className={classes.dropdownStyle}>
          <InputLabel id="shipper-dropdown-label">View Options</InputLabel>
          <Select
            labelId="shipper-dropdown-label"
            id="shipper-dropdown"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={shipper}
            onChange={handleChange}
            disableUnderline
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>View Option 1</MenuItem>
            <MenuItem value={20}>View Option 2</MenuItem>
            <MenuItem value={30}>View Option 3</MenuItem>
          </Select>
        </FormControl>

        <SaveViewBar />
      </Box>
    </>
  );
}

export default AppBar;
