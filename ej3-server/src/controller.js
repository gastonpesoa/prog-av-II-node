const personas = require('./db.json');
const short = require('short-uuid')

const getPersonas = () => {
    return personas;
}
const getPersona = (id) => {
    return personas.find((persona) => persona.id == id)
}
const deletePersona = (id) => {
    let index = personas.findIndex((persona) => persona.id == id)
    if (index != -1) {
        personas.splice(index, 1)
        return true
    }
    return false
}
const createPersona = (data) => {
    const { nombre, edad } = data
    if (nombre && edad) {
        newPerson = { id: short.generate(), nombre, edad }
        personas.push(newPerson)
        return newPerson
    } else {
        return null
    }
}
const updatePersona = (person) => {
    const personToEdit = personas.find((persona) => persona.id == person.id)
    if (personToEdit) {
        for (const key in person) {
            if (Object.hasOwnProperty.call(personToEdit, key)) {
                personToEdit[key] = person[key]
            }
        }
        return true
    } else {
        return false
    }
}
const logger = (req, res, next) => {
    console.log(`Hay ${personas.length} personas en la lista`)
    next()
}

module.exports = {
    getPersonas,
    getPersona,
    deletePersona,
    createPersona,
    updatePersona,
    logger
}