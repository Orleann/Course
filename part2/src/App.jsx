import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>total {totalExercises} of exercises</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React',
      exercises: 10},
      {name: 'Using props to pass data',
      exercises: 7},
      {name: 'State of a component',
      exercises: 14},
      {name: 'Redux',
      exercises: 11}
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <b><Total parts={course.parts} /></b>
    </div>
  );
};

export default App;
