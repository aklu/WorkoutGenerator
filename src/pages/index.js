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
]

const IndexPage = ({ data }) => (
  <Layout>
      <div class="container">
        <h1>How does this site work?</h1>
        <p>Simple, just click the button that says "Generate Workout!". The tab will generate 9 rounds of workouts, each 3 minutes long. Good luck in your workout!</p>
      </div>
      <div>
        <button>Generate Workout!</button>
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

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
