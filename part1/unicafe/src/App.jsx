import { useState } from 'react'

const Button=({text,event})=>{
  return(
    <button onClick={event}>{text}</button>
  )
}

function App()
{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)

  const goodclickhandler=()=>{
      let goodupdate=good
      goodupdate++
      setGood(goodupdate)
  }
  const neutralclickhandler=()=>{
    let neutralupdate=neutral
    neutralupdate++
    setNeutral(neutralupdate)
  }
  const badclickhandler=()=>{
    let badupdate=bad
    badupdate++
    setBad(badupdate)
  }

  return(
    <>
    <h2>Give Feedback</h2>
    <Button text={'Good'} event={goodclickhandler}/>
    <Button text={'Neutral'} event={neutralclickhandler}/>
    <Button text={'Bad'} event={badclickhandler}/>
    <h3>Good : {good}</h3>
    <h3>Neutral : {neutral}</h3>
    <h3>Bad : {bad}</h3>
    </>
  )
}
export default App