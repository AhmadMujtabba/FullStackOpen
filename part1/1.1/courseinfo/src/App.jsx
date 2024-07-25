import { useState } from 'react'
//header
const Header=(props)=>{
  return(
    <h1>{props.name}</h1>
  )
}
//Content
  const Content=(props)=>{
    return(
      <p>{props.part}{props.number}</p>
    )
  }
//Total
  const Total=(props)=>{
    const a=props.ex1
    const b=props.ex2
    const c=props.ex3
    return(
      <p>Number of exercises {a+b+c}</p>
    )
  }
const App=()=>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
    <Header name={course}/>
    <Content part={part1} number={exercises1}/>
    <Content part={part2} number={exercises2}/>
    <Content part={part3} number={exercises3}/>
    <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
  </div>
  )
}
export default App