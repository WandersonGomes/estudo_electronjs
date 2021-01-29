const path = require('path')
const model = require(path.resolve('model/model.js'));

async function insertContact(name, email) {
    const result = await model.insertContact(name, email)
    return result
}

async function getContacts() {
    const result = await model.getContacts()
    return result
}

//EXPORTA AS FUNCIONALIDADES
module.exports = {
    insertContact,
    getContacts
}