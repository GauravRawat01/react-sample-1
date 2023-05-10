import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleText: {
    fontSize: "1.5rem",
  },
  titleBox: {
    marginLeft: "2rem",
    minWidth: "12rem",
    display: "flex",
    position: "relative",
    // backgroundColor: "blue",
  },
}));

function AppTitle() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.titleBox}>
        <Typography className={classes.titleText}>Application Title</Typography>
      </Box>
    </>
  );
}

export default AppTitle;
