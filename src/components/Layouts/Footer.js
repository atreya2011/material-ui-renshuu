import React, { Component } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default class extends Component {
  state = {};
  render() {
    const { muscles } = this.props;
    return (
      <Paper>
        <Tabs
          value={0}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {muscles.map(group => (
            <Tab label={group} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}
