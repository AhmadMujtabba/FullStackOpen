import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(0)
  const quotes = [
    'Adding manpower to a late software project makes it later!',
    'The best way to get a project done faster is to start sooner-Jim Highsmith',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.-Tom Cargill',
    'Even the best planning is not so omniscient as to get it right the first time.-Fred Brooks',
    'How does a project get to be a year late?... One day at a time.-Fred Brooks',
  ]
  const randomnumgen = () => {
    let num = Math.floor(Math.random() * quotes.length)
    setSelected(num)
    return (console.log(num))
  }
  return (
    <div>
      <p>{quotes[selected]}</p>
      <button onClick={randomnumgen}>
        Next Anecdote
      </button>
    </div>
  )
}

export default App
