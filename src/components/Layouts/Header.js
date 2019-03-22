import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class extends Component {
  state = {};
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
