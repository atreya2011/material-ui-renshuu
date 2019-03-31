import React, { Component, Fragment } from "react";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };
    handleToggle = () => {
      this.setState({ open: !this.state.open });
    };
    handleChange = name => event => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: event.target.value
        }
      });
    };
    handleSubmit = () => {
      // TODO: validate the form
      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
      });
      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };
    render() {
      const {
        open,
        exercise: { title, description, muscles }
      } = this.state;
      const { classes, muscles: categories } = this.props;
      return (
        <Fragment>
          <Fab size="small" onClick={this.handleToggle}>
            <Add />
          </Fab>
          <Dialog open={open} onClose={this.handleToggle}>
            <DialogTitle id="form-dialog-title">
              Create a new exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the form below
              </DialogContentText>
              <TextField
                className={classes.FormControl}
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
              <br />
              <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                <Select value={muscles} onChange={this.handleChange("muscles")}>
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                className={classes.FormControl}
                label="Description"
                multiline
                rows="4"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                onClick={this.handleSubmit}
                variant="contained"
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
