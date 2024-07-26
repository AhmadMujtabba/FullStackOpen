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
      <Part part={props.p[0].name} exer={props.p[0].exercises} />
      <Part part={props.p[1].name} exer={props.p[1].exercises} />
      <Part part={props.p[2].name} exer={props.p[2].exercises} />
    </>
  )
}
//Total
const Total = (props) => {
  return (
    <p>Number of exercises {props.obj[0].exercises + props.obj[1].exercises + props.obj[2].exercises}</p>
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
  //
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header name={course} />
      <Content p={parts} />
      <Total obj={parts} />
    </div>
  )
}
export default App