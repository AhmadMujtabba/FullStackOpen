import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(0)
  const [point,setPoint]=useState([0,0,0,0,0])
  const [highest,setHighest]=useState(0)
  const [maxindex,setMaxindex]=useState(0)
  const quotes = 
  [
    'Adding manpower to a late software project makes it later!',
    'The best way to get a project done faster is to start sooner-Jim Highsmith',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.-Tom Cargill',
    'Even the best planning is not so omniscient as to get it right the first time.-Fred Brooks',
    'How does a project get to be a year late?... One day at a time.-Fred Brooks',
  ]
  const randomnumgen = () => {
    let num = Math.floor(Math.random() * quotes.length)
    setSelected(num)
  }

  const votecounter=()=>{
    const vote=[...point]
    vote[selected]+=1
    setPoint(vote)
  }
  const maxvote=()=>{
    let updatedvote=[...point]
    let max=Math.max(...updatedvote)
    setHighest(max)
    let index=updatedvote.indexOf(max)
    setMaxindex(index)
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{quotes[selected]}</p>
      <button onClick={randomnumgen}>
        Next Anecdote
      </button>
      <button onClick={()=>{votecounter();maxvote();}}>
        Vote
      </button>
      <h2>Anecdote with most vote</h2>
      <p>{quotes[maxindex]}</p>
    </div>
  )
}

export default App
