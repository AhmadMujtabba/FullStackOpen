import { useState } from 'react'
//header
const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}
//Content
const Content = (props) => {
  return (
    <>
      <Part part={props.p1} exer={props.e1} />
      <Part part={props.p2} exer={props.e2} />
      <Part part={props.p3} exer={props.e3} />
    </>
  )
}
//Total
const Total = (props) => {
  const a = props.ex1
  const b = props.ex2
  const c = props.ex3
  return (
    <p>Number of exercises {a + b + c}</p>
  )
}
//Part1.2
//Part
const Part = (props) => {
  return (
    <p>{props.part}{props.exer}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header name={course} />
      <Content p1={part1} e1={exercises1} p2={part2} e2={exercises2} p3={part3} e3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}
export default App