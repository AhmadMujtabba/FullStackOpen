import { useEffect, useState } from 'react'
import phonebookService from './services/phonebook'
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
const Persons = ({ searched, deleteperson }) => {

  return (

    searched.map(names =>
      <div key={names.id}>
        <p key={names.name}>{names.name}{names.number}</p>
        <button key={names.id} onClick={() => deleteperson(names.id, names.name)}>Delete</button>
      </div>
    )

  )
}

//----------------------------------------
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()
  const [searched, setSearchedNames] = useState(persons)
  //Getting data from server
  useEffect(() => {
    phonebookService
      .getdata()
      .then(res => {
        setPersons(res)
        setSearchedNames(res)
      })
  }, [])
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
    if (persons.some(name => name.name === newName && name.number === newNumber)) {
      window.alert(newName + ' already exist in phonebook')
    }
    else if (persons.some(name => name.name === newName && name.number !== newNumber)) {
      const data = persons.find(n => n.name === newName && n.number !== newNumber)
      const id = data.id
      const changednumber = { ...data, number: newNumber }
      if (window.confirm(`${newName} already existed , Do you want to replace old number with new one ?`)) {
        phonebookService
          .updateentry(id, changednumber)
          .then(res => {
            setPersons(persons.concat(res))
            setSearchedNames(persons.concat(res))
            setNewName('')
            setNewNumber('')
          })
      }
    }
    else {
      const personObj = {
        name: newName,
        number: newNumber
      }
      phonebookService
        .createentry(personObj)
        .then(response => {
          const newperson = persons.concat(response)
          setPersons(newperson)
          setSearchedNames(newperson)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deleteperson = (idfrompersoncom, namefrompersoncom) => {
    if (window.confirm(`Delete ${namefrompersoncom} ?`)) {
      phonebookService
        .deleteentry(idfrompersoncom)
        .then((res) => {
          const updateddata = persons.filter(n => n.id != res.id)
          setPersons(updateddata)
          setSearchedNames(updateddata)
        })
    }
  }

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
      <Persons searched={searched} deleteperson={deleteperson} />
    </div>
  )
}

export default App