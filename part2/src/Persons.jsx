import React from 'react';

const Persons = ({ persons, removePerson }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} - {person.number}
          <button onClick={() => removePerson(person.id, person.name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;