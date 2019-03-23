import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "./Exercises";
import { muscles, exercises } from "../store";

class App extends Component {
  state = {
    exercises
  };
  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }
  render() {
    const exercises = this.getExercisesByMuscle();
    return (
      <Fragment>
        <Header />
        <Excercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
