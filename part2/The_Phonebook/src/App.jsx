import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState()
  const [doublestatus,setDoubleStatus]=useState()

  const handlenewname = (event) => {
    setNewName(event.target.value)
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
      name: newName
    }
    setPersons(persons.concat(personObj))
    setNewName('')
  }
  ////
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlenewname} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(names => <p key={names.name}>{names.name}</p>)}
    </div>
  )
}

export default App