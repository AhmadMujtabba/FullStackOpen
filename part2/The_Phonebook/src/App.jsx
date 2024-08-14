import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState()

  const handlenewname=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson=(event)=>{
    event.preventDefault()
    const personObj={
      name:newName
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlenewname}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(names=><p key={names.name}>{names.name}</p>)}
    </div>
  )
}

export default App