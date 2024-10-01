const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(express.json())
morgan.token('data', (req, res) => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
const data = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Ali",
    "number": "39-23-6423122"
  }
]
app.use(express.json())
app.get('/api/persons', (request, response) => {
  response.json(data)
})

app.get('/info', (request, response) => {
  const date = Date()
  const noofentries = String(data.length)
  const restosend = `<p>Phonebook has info for ${noofentries} people</p><p>${date}</p>`
  response.send(restosend)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = data.find(n => n.id === id)
  if (!person) {
    response.status(404).send('Not Found')
  }
  else {
    response.send(person)
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const persons = data.filter(n => n.id !== id)
  response.send(204).end()
})

const generateId = () => {
  return Math.floor((Math.random() * 100000) + 1)
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }
  if (!person.name || !person.number) {
    response.status(400).send("Error : Name or Number must not be empty")
  }
  if (data.some(n => n.name === person.name)) {
    response.status(409).send("Error : Name already exist on server")
  }
  const newdata = data.concat(person)
  response.send(newdata)
})

const PORT = 3001
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))