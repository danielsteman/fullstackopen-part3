require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Person = require('./models/person')
const e = require('express')
const { count } = require('./models/person')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.get('/', (request, response) => {
    response.send('<h1>Phonebook!</h1>')
  })

app.get('/api/persons', (request, response, next) => {
    Person.find({})
    .then(result => response.json(result))
    .catch(error => next(error))
})

app.get('/info', (request, response) => {

    Person.count({}, function( err, count){
        let len = count
        let string = `Phonebook has info for ${len} people`
        let ts = new Date()
        response.send(`<p>${string}</p><p>${ts}</p>`)    
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
        if (person) {
            response.json(person.toJSON())
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    Person.findByIdAndRemove(id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    
    const person = request.body

    if (!person.name) {
        return response.status(400).json({
            error: "missing name"
        })
    } else if (!person.number) {
        return response.status(400).json({
            error: "missing number"
        })
    }

    const newPerson = new Person(person)

    newPerson.save()
    .then(result => {
        console.log('person saved!')
        mongoose.connection.close()
        response.json(person)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person)
    .then(updatedPerson => {
        response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)
  
const errorHandler = (error, request, response, next) => {
console.error(error.message)

if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
} 

next(error)
}
  
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})