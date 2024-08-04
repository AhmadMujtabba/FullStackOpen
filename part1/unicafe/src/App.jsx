import { useState } from 'react'

const Button = ({ text, event }) => <button onClick={event}>{text}</button>
const Statistics=({goodpoint,neutralpoint,badpoint,averagepoint,totalpoint,percentage})=>{
    return(
      <>
      <h3>Good : {goodpoint}</h3>
      <h3>Neutral : {neutralpoint}</h3>
      <h3>Bad : {badpoint}</h3>
      <h4>Total : {totalpoint}</h4>
      <h4>Average : {averagepoint}</h4>
      <h4>Percentage : {percentage} %</h4>
      </>
    )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [point, setPoint] = useState(0)
  const [average, setAverage] = useState(0)
  const [percent, setPercent] = useState(0)


  const goodclickhandler = () => {
    let goodupdate = good + 1
    setGood(goodupdate)
    setPoint(goodupdate + neutral + bad)
    let pointref = point
    const ave = ((goodupdate * 1) + (neutral * 0) + (bad * -1)) / (pointref + 1)
    setAverage(ave)
    //percent
    let goodper = (goodupdate * 100) / (pointref + 1)
    setPercent(goodper)
  }
  const neutralclickhandler = () => {
    let neutralupdate = neutral + 1
    setNeutral(neutralupdate)
    setPoint(good + neutralupdate + bad)
    let pointref = point
    const ave = ((good * 1) + (neutralupdate * 0) + (bad * -1)) / (pointref + 1)
    setAverage(ave)
    //percent
    let goodref=good
    let goodper = (goodref * 100) / (pointref + 1)
    setPercent(goodper)

  }
  const badclickhandler = () => {
    let badupdate = bad + 1
    setBad(badupdate)
    setPoint(good + neutral + badupdate)
    let pointref = point
    const ave = ((good * 1) + (neutral * 0) + (badupdate * -1)) / (pointref + 1)
    setAverage(ave)
    //percent
    let goodref=good
    let goodper = (goodref * 100) / (pointref + 1)
    setPercent(goodper)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={'Good'} event={goodclickhandler} />
      <Button text={'Neutral'} event={neutralclickhandler} />
      <Button text={'Bad'} event={badclickhandler} />
      <h2>Statistics</h2>
      <Statistics goodpoint={good} neutralpoint={neutral} badpoint={bad} totalpoint={point} averagepoint={average} percentage={percent}/>
    </>
  )
}
export default App