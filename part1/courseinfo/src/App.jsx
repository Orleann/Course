import React from 'react';

// Header component
const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
};

// Content component
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

// Total component
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <p><strong>Total exercises: {totalExercises}</strong></p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

const Part = ({ part }) => {
  const { name, exercises } = part;
  return (
    <p>
      {name} - {exercises} exercises
    </p>
  );
};

export default App;
