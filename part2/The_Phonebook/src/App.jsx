import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number: '040-1234567' }
  ])
  const [newName, setNewName] = useState()
  const [newNumber,setNewNumber]=useState()

  const handlenewname = (event) => {
    setNewName(event.target.value)
  }
  const handlenewnumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(name=>name.name===newName))
      {
        window.alert(newName + ' already exist in phonebook')
      }
    else
    {
      addpersonfun()
    }
    
  }
  ////
  const addpersonfun = () => {
    const personObj = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')
  }
  ////
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input value={newName} onChange={handlenewname} /><br/><br/>
          Number: <input value={newNumber} onChange={handlenewnumber} />
        </div><br/><br/>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(names => <p key={names.name}>{names.name}{names.number}</p>)}
    </div>
  )
}

export default App