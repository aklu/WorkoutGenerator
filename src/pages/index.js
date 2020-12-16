import React, { Component } from 'react';
import Layout from "../components/layout";
import "../components/layout.css";
import { array } from 'prop-types';

let workouts = [
  {
    id: 1,
    workout: [
      "Total Jumping Jacks in 3 Minutes",
      "15 Mountain Climbers, 10 High Knees",
      "5 Burpees, 20 Second Plank Hold",
      "Jump Rope For 3 Minutes (if you don't have a jump rope do penguin hops)",
      "Death By Burpees - Do Burpees For 3 Minutes",
      "30 Butt Kicks, 15 Mountain Climbers",
      "15 High Knees, 15 Jumping Jacks",
      "10 Jumping Lunges, 10 High Knees",
      "15 Plank Jacks, 15 Jumping Jacks"]
  },
  {
    id: 2,
    workout: [
      "5 Push-ups, 30 punches, 5 Lunges",
      "10 Squats, 6 Alternating Side Kicks",
      "30 Second Wall Sit, 10 Reverse Lunges",
      "20 James Bond Lunges, 10 Push-ups",
      "10 Jab/Cross/Hook Combos, Side Shuffle 10x (length of yoga mat or wall to wall)",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 3,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 4,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 5,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 6,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 7,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 8,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  },
  {
    id: 9,
    workout: [
      "20 Tricep Dips, 5 Push-ups",
      "Total Crab Punches",
      "25 Alternating Lunge Kicks, 10 Sit-ups",
      "Punch 5 Times, Switch Stance",
      "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
      "This is the last one"]
  }
];

class App extends Component {
  state = {
    wkt: []
  }

  individualWorkouts = [];

  handleOnClick = (workouts) => {
    this.setState( this.wkt, this.generateRandomWorkout({workouts}));
  }

  generateRandomWorkout = () => {
    let wkt = [];
    workouts.forEach((w)=>{
      wkt.push({id: w.id, workout: w.workout[Math.floor(Math.random() * array.length)]});
    })
    
    this.setState({wkt})
  }

render() {
  return(
    <Layout>
        <div className="container">
          <h1>How does this site work?</h1>
          <p>Simple, just click the button that says "Generate Workout!". This button will generate 9 rounds of workouts, each 3 minutes long.</p>
        </div>
        <div className="button">
          <button onClick={() => this.handleOnClick(workouts) }>Generate Workout!</button>
        </div>
        <div className="workoutDisplay">
          { this.state.wkt.map((w) => (
            <div className="workoutSections">
              <h2>Round {w.id}</h2>
              <p>{w.workout}</p>
            </div>
          ))}
        </div>
    </Layout>
    );
}}; export default App