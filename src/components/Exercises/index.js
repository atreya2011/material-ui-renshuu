import React, { Fragment } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  exercise: {
    id,
    title = "Welcome",
    description = "Please select an exercise from the list on the left"
  },
  exercises,
  category,
  onSelect
}) => {
  return (
    <Grid container spacing={16}>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem button key={id}>
                      <ListItemText
                        onClick={() => onSelect(id)}
                        primary={title}
                      />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">{title}</Typography>
          <Typography variant="subheading" style={{ marginTop: 20 }}>
            {description}
          </Typography>
          <Typography />
        </Paper>
      </Grid>
    </Grid>
  );
};
