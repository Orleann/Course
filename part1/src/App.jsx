import React, { useState } from 'react'

const Button = ({ handleCLick, text}) => {
  return(
    <button onClick={handleCLick}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <p>
      {text}: {value}
    </p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const average = (good * 1 + neutral * 0 + bad * -1) / all || 0
  const postitive = (good / all) * 100 || 0

  return (
    <div>
      <h2>statistics</h2>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="total" value={all}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={postitive}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1)
    setHasFeedback(true)
  }

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
    setHasFeedback(true)
  }

  const handleBadFeedback = () => {
    setBad(bad + 1)
    setHasFeedback(true)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>

      {hasFeedback && <Statistics good={good} neutral={neutral} bad={bad} /> || <p>No feedback given</p>}
    </div>
  );
};

export default App;
