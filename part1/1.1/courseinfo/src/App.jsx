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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header name={course} />
      <Content p1={part1.name} e1={part1.exercises} p2={part2.name} e2={part2.exercises} p3={part3.name} e3={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}
export default App