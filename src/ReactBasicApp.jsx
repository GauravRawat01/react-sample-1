import React from "react";
import AppBar from "./components/AppBar";
import "./ReactBasicApp.css";
import { Box } from "@material-ui/core";

class ReactBasicApp extends React.Component {
  render() {
    return (
      <>
        <Box className="basic-app-area">
          <AppBar />
        </Box>
      </>
    );
  }
}

export default ReactBasicApp;
