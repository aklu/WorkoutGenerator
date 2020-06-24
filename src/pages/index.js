import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const workoutOne = [
  "Total Jumping Jacks in 3 Minutes",
  "15 Mountain Climbers, 10 High Knees",
  "5 Burpees, 20 Second Plank Hold",
  "Jump Rope For 3 Minutes (if you don't have a jump rope do penguin hops)",
  "Death By Burpees - Do Burpees For 3 Minutes",
  "30 Butt Kicks, 15 Mountain Climbers",
  "15 High Knees, 15 Jumping Jacks",
  "10 Jumping Lunges, 10 High Knees",
  "15 Plank Jacks, 15 Jumping Jacks",
];

const workoutTwo = [
  "5 Push-ups, 30 punches, 5 Lunges",
  "10 Squats, 6 Alternating Side Kicks",
  "30 Second Wall Sit, 10 Reverse Lunges",
  "20 James Bond Lunges, 10 Push-ups",
  "10 Jab/Cross/Hook Combos, Side Shuffle 10x (length of yoga mat or wall to wall)",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];

const workoutThree = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];

const workoutFour = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];
const workoutFour = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];
const workoutFive = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];
const workoutSix = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];
const workoutSeven = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];
const workoutEight = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];

const workoutNine = [
  "20 Tricep Dips, 5 Push-ups",
  "Total Crab Punches",
  "25 Alternating Lunge Kicks, 10 Sit-ups",
  "Punch 5 Times, Switch Stance",
  "10 Jab/Cross/Hook Combos, 10 Squat Jumps",
  "10 Alternating Side Kicks, 10 Plank Rotations"
];

const handleOnClick= () => {
  const randomOne = workoutOne[Math.floor(Math.random() * workoutOne.length)];
  const randomTwo = workoutTwo[Math.floor(Math.random() * workoutTwo.length)];
  const randomThree = workoutThree[Math.floor(Math.random() * workoutThree.length)];
  const randomFour = workoutFour[Math.floor(Math.random() * workoutFour.length)];
  const randomFive = workoutFive[Math.floor(Math.random() * workoutFive.length)];
  const randomSix = workoutSix[Math.floor(Math.random() * workoutSix.length)];
  const randomSeven = workoutSeven[Math.floor(Math.random() * workoutSeven.length)];
  const randomEight = workoutEight[Math.floor(Math.random() * workoutEight.length)];
  const randomNine = workoutNine[Math.floor(Math.random() * workoutNine.length)];
}


const IndexPage = ({ data }) => (
  <Layout>
      <div class="container">
        <h1>How does this site work?</h1>
        <p>Simple, just click the button that says "Generate Workout!". The tab will generate 9 rounds of workouts, each 3 minutes long. Good luck in your workout!</p>
      </div>
      <div>
        <button onClick={handleOnClick} >Generate Workout!</button>
      </div>
      <div>
        <h1>Round 1 of your workout:</h1>
        <p>{randomOne}</p>
        <h1>Round 2 of your workout:</h1>
        <p>{randomTwo}</p>
        <h1>Round 3 of your workout:</h1>
        <p>{randomThree}</p>
        <h1>Round 4 of your workout:</h1>
        <p>{randomFour}</p>
        <h1>Round 5 of your workout:</h1>
        <p>{randomFive}</p>
        <h1>Round 6 of your workout:</h1>
        <p>{randomSix}</p>
        <h1>Round 7 of your workout:</h1>
        <p>{randomSeven}</p>
        <h1>Round 8 of your workout:</h1>
        <p>{randomEight}</p>
        <h1>Round 9 of your workout:</h1>
        <p>{randomNine}</p>
      </div>
  </Layout>
)

export default IndexPage
