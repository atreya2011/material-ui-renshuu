import React, { Component } from "react";
import { Paper } from "@material-ui/core";

export default class extends Component {
  state = {};
  render() {
    const styles = this.props.styles;
    return <Paper style={styles.Paper}>Right Pane</Paper>;
  }
}
