const express = require('express')
const cors = require('cors')
const { handlerNotFound } = require('./src/middleware')
const PORT = 3000
const {
    getPersonas,
    getPersona,
    createPersona,
    deletePersona,
    updatePersona,
    logger
} = require('./src/controller')

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.send("<h1>Servidor Personas</h1>")
})
app.get('/api/personas', (req, res) => {
    res.json(getPersonas())
})
app.get('/api/personas/:id', (req, res) => {
    const id = req.params.id
    const persona = getPersona(id)
    persona
        ? res.status(200).json(persona).end()
        : res.status(404).end()
})
app.delete('/api/personas/:id', (req, res) => {
    const id = req.params.id
    deletePersona(id)
        ? res.status(200).json({
            ok: true,
            error: "Person deleted"
        }).end()
        : res.status(200).json({
            ok: false,
            error: "Person not found"
        }).end()
})
app.post('/api/personas/', (req, res) => {
    const body = req.body
    const createdPerson = createPersona(body)
    createdPerson
        ? res.status(201).json(createdPerson).end()
        : res.status(400).end()
    res.end()
})
app.put('/api/personas/', (req, res) => {
    const body = req.body
    console.log(body)
    updatePersona(body)
        ? res.status(200).json({
            ok: true,
            error: "Person updated"
        }).end()
        : res.status(200).json({
            ok: false,
            error: "Person not found"
        }).end()
})
app.use(handlerNotFound)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})