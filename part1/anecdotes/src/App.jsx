import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voteCount, setVoteCount] = useState(new Uint8Array(8))
  const [winner, setWinner] = useState(0)

  const handleVote = () => {
    const copy = [...voteCount]
    copy[selected] += 1

    let maxVote = -1, id = 0
    for (let i = 0; i < copy.length; i++) { 
      if (copy[i] > maxVote){
        maxVote = copy[i]
        id = i
      }
    }

    setVoteCount(copy)
    setWinner(id)
  }

  const handleClick = () => {
    let x = Math.floor(Math.random() * 8)
    setSelected(x)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {voteCount[selected]} votes <br />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleClick} text='next anecdote' />

      <h1>Anecdote with most votes</h1>
      {anecdotes[winner]} <br />
      has {voteCount[winner]} votes <br />
    </div>
  )
}

export default App
