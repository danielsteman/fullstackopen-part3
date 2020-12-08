const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "040-235235235"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-1235135"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6432621"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phonebook!</h1>')
  })

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    let len = persons.length
    let string = `Phonebook has info for ${len} people`
    let ts = new Date()
    response.send(`<p>${string}</p><p>${ts}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)    
    } else {
        response.status(400).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    
    const person = request.body

    if (!person.name) {
        return response.status(400).json({
            error: "missing name"
        })
    } else if (!person.number) {
        return response.status(400).json({
            error: "missing number"
        })
    } else if (persons.map(x => x.name).includes(person.name)) {
        return response.status(400).json({
            error: "name already exists"
        })
    } else if (persons.map(x => x.number).includes(person.number)) {
        return response.status(400).json({
            error: "number already exists"
        })
    }

    const randId = Math.floor(Math.random() * 100)
    person.id = randId
    persons = persons.concat(person)
    console.log(person)
    response.json(person)
})

app.put('/api/persons', (request, response) => {
    console.log(request)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})