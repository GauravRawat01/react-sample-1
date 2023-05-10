import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  Input,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  saveViewBox: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    alignItems: "center",
    justify: "space-around",
  },
  invisibleBox: {
    display: "none",
    justify: "space-around",
  },
  moreIcon: {
    color: "blue",
  },
  buttons: {
    color: "blue",
    width: "10rem",
    height: "5rem",
    alignContent: "center",
    backgroundColor: "gray",
    borderRadius: "0.4rem",
    width: "5rem",
    height: "2rem",
    marginLeft: "0.5rem",
  },
  buttonText: {
    fontSize: "0.8rem",
    color: "white",
  },
  iconBox: {
    margin: "2px",
    marginLeft: "auto",
  },
  metaDataBox: {
    display: "flex",
    alignItems: "center",
    justifyItems: "space-between",
    justifyContent: "space-around",
    justify: "space-evenly",
    gap: "1rem",
  },
  avatarBox: {
    alignItems: "center",
    display: "flex",
  },
  avatarStyle: {
    height: "2rem",
    width: "2rem",
    marginRight: "-0.4rem",
  },
  titleBarText: {
    fontSize: "0.9rem",
  },
}));

function SaveViewBar() {
  const classes = useStyles();

  const onSave = (event) => {
    alert(event.target);
    document.getElementById("save-view-form").style.display = "none";
    document.getElementById("meta-data-box").style.display = "flex";
  };

  const onCancel = (event) => {
    document.getElementById("save-view-form").style.display = "none";
    document.getElementById("meta-data-box").style.display = "flex";
  };

  const showSaveViewBox = (event) => {
    document.getElementById("meta-data-box").style.display = "none";
    document.getElementById("save-view-form").style.display = "inline-block";
  };

  return (
    <>
      <Box className={classes.saveViewBox}>
        <Box id="save-view-form" className={classes.invisibleBox}>
          <Input id="view-name" type="text" placeholder="View Name"></Input>
          <Button
            id="save-view-button"
            className={classes.buttons}
            onClick={onSave}
          >
            <Typography className={classes.buttonText}>Save</Typography>
          </Button>
          <Button
            id="cancel-save-button"
            className={classes.buttons}
            onClick={onCancel}
          >
            <Typography className={classes.buttonText}>Cancel</Typography>
          </Button>
        </Box>
        <Box id="meta-data-box" className={classes.metaDataBox}>
          <Box className={classes.avatarBox}>
            <Typography className={classes.titleBarText}>
              Visitors&nbsp;
            </Typography>
            <Avatar className={classes.avatarStyle}></Avatar>
            <Avatar className={classes.avatarStyle}></Avatar>
            <Avatar className={classes.avatarStyle}></Avatar>
          </Box>
          <Typography className={classes.titleBarText}>
            Last updated at: Monday 8th May 2023
          </Typography>
        </Box>
        <IconButton className={classes.iconBox} onClick={showSaveViewBox}>
          <MoreVert className={classes.moreIcon}></MoreVert>
        </IconButton>
      </Box>
    </>
  );
}

export default SaveViewBar;
