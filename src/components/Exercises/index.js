import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default class extends Component {
  state = {};
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item sm>
          <LeftPane styles={styles}>Right Pane</LeftPane>
        </Grid>
        <Grid item sm>
          <RightPane styles={styles}>Right Pane</RightPane>
        </Grid>
      </Grid>
    );
  }
}
