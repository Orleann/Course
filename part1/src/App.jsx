import React, { useState } from 'react'

const Button = ({ handleCLick, text}) => {
  return(
    <button onClick={handleCLick}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
  const [selected, setSelected] = useState(0);

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

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * (Anecdotes.length)))
  }

  const Anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodFeedback}>Good</button>
      <button onClick={handleNeutralFeedback}>Neutral</button>
      <button onClick={handleBadFeedback}>Bad</button>
      <button onClick={handleSelected}>Random Anecdote</button>

      {hasFeedback && <Statistics good={good} neutral={neutral} bad={bad} /> || <p>No feedback given</p>}
      {Anecdotes[selected]}
    </div>
  );
};

export default App;
