import React, { useState } from 'react';
import Layout from "../components/layout";
import "../components/layout.css";

const workouts = [
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
      "10 Alternating Side Kicks, 10 Plank Rotations"]
  }
];

const [wrkout, setWorkout] = useState();

const handleOnClick = () => {
  const len = workouts.length;
  setWorkout(Math.floor(Math.random() * len));
}

const IndexPage = () => (
  <Layout>
      <div class="container">
        <h1>How does this site work?</h1>
        <p>Simple, just click the button that says "Generate Workout!". This button will generate 9 rounds of workouts, each 3 minutes long.</p>
      </div>
      <div class="button">
        <button onClick={handleOnClick}>Generate Workout!</button>
      </div>

      <div class="workoutDisplay">
        <div class="workoutSections">
          {/* {workouts.map((wk, i)=>(
            <h2>Round {i}</h2>
            {wk.workout.map((wrkt, index)=>(
              <p></p>
            ))}
          </div>
          ))} */}
          <h2>Round </h2>
          {/* <h2>Round 1:</h2>
          <p>{}</p> */}
        </div>
        <div class="workoutSections">
          <h2>Round 2:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 3:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 4:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 5:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 6:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 7:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 8:</h2>
          <p>{}</p>
        </div>
        <div class="workoutSections">
          <h2>Round 9:</h2>
          <p>{}</p>
        </div>
      </div>
      {/* {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))} */}
  </Layout>
)

export default IndexPage
