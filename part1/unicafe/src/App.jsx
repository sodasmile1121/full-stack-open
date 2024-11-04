import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={all} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    const newAll = newGood + neutral + bad
    setGood(newGood)
    setAll(newAll)
    setAverage((newGood - bad)/newAll)
    setPositive(`${newGood * 100 / newAll} %`)
  }
  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newAll = good + newNeutral + bad
    setNeutral(newNeutral)
    setAll(newAll)
    setAverage((good-bad)/newAll)
    setPositive(`${good * 100 / newAll} %`)
  }
  const handleBadClick = () => {
    const newBad = bad + 1
    const newAll = good + neutral + newBad
    setBad(newBad)
    setAll(newAll)
    setAverage((good-newBad)/newAll)
    setPositive(`${good * 100 / newAll} %`)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App