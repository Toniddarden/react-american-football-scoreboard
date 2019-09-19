//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // create state [currentScore H/A, setScore H/A] to (0)
  // function scoreZero H/A -> event handler.preventDefault(); and set setScore to (0)
  // Add {currentScore H/A} to home__score and away__score
  // add onClick event handlers to the buttons set to setScoreHome(currentScoreHome + #) for each button

  // home
  const [currentScoreHome, setScoreHome] = useState(0);

  const scoreZeroHome = e => {
    e.preventDefault();
    setScoreHome(0);
  };

  // away
  const [currentScoreAway, setScoreAway] = useState(0);

  const scoreZeroAway = e => {
    e.preventDefault();
    setScoreAway(0);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">
              <span> {currentScoreHome} </span>
            </div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">
              <span> {currentScoreAway} </span>
            </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => {
              setScoreHome(currentScoreHome + 7);
            }}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={() => {
              setScoreHome(currentScoreHome + 3);
            }}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => {
              setScoreAway(currentScoreAway + 7);
            }}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => {
              setScoreAway(currentScoreAway + 3);
            }}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
