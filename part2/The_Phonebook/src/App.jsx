import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [searched, setSearchedNames] = useState(persons)

  const handlenewname = (event) => {
    setNewName(event.target.value)
  }
  const handlenewnumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handlesearchname = (event) => {
    const searchname = event.target.value
    const searchednames = persons.filter(names =>
      names.name.toLowerCase().includes(searchname.toLowerCase())
    )
    setSearchedNames(searchednames);
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(name => name.name === newName)) {
      window.alert(newName + ' already exist in phonebook')
    }
    else {
      addpersonfun()
    }

  }
  ////
  const addpersonfun = () => {
    const personObj = {
      name: newName,
      number: newNumber
    }
    const newperson=persons.concat(personObj)
    setPersons(newperson)
    setSearchedNames(newperson)
    setNewName('')
    setNewNumber('')
  }
  ////
  return (
    <div>
      <h1>Phonebook</h1>
      Search <input onChange={handlesearchname} />
      <form>
        <div>
          <h2>Add New</h2>
          Name: <input value={newName} onChange={handlenewname} /><br /><br />
          Number: <input value={newNumber} onChange={handlenewnumber} />
        </div><br /><br />
        <div>
          <button type="submit" onClick={addPerson}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searched.map(names => <p key={names.name}>{names.name}{names.number}</p>)}
    </div>
  )
}

export default App