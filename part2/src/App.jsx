import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import services from './services';

const App = () => {
  const [persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    services.getAll()
      .then(data => setPersons(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());

    if (existingPerson) {
      if (window.confirm(`${newName} is already in the phonebook. Do you want to update the number?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        services.update(existingPerson.id, updatedPerson)
          .then(data => {
            setPersons(persons.map(person =>
              person.id === existingPerson.id ? data : person
            ));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => console.error('Error updating data:', error));
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      services.create(newPerson)
        .then(data => {
          setPersons([...persons, data]);
          setNewName('');
          setNewNumber('');
        })
        .catch(error => console.error('Error saving data:', error));
    }
  };

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      services.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => console.error('Error deleting data:', error));
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
