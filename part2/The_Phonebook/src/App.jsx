import axios from 'axios'
import { useEffect, useState } from 'react'
//----------------------------------------
const Filter = ({ handlesearchname }) => {

  return (
    <div>
      Search <input onChange={handlesearchname} />
    </div>
  )
}

const PersonForm = ({ handlenewname, handlenewnumber, addperson, newname, newnumber }) => {

  return (
    <form>
      <div>
        Name: <input value={newname} onChange={handlenewname} /><br /><br />
        Number: <input value={newnumber} onChange={handlenewnumber} />
      </div><br /><br />
      <div>
        <button type="submit" onClick={addperson}>Add</button>
      </div>
    </form>
  )
}
const Persons = ({ searched }) => {

  return (
    <div>
      {searched.map(names => <p key={names.name}>{names.name}{names.number}</p>)}
    </div>
  )
}

//----------------------------------------
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [searched, setSearchedNames] = useState(persons)
  //Getting data from server
  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>console.log(response.data))
  },[])
  //--------------------------
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
    const newperson = persons.concat(personObj)
    setPersons(newperson)
    setSearchedNames(newperson)
    setNewName('')
    setNewNumber('')
  }
  ////
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handlesearchname={handlesearchname} />
      <h2>Add New</h2>
      <PersonForm 
      handlenewname={handlenewname} 
      newname={newName} 
      newnumber={newNumber} 
      handlenewnumber={handlenewnumber} 
      addperson={addPerson} />
      <h2>Numbers</h2>
      <Persons searched={searched} />
    </div>
  )
}

export default App