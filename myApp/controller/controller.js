const path = require('path')
const model = require(path.resolve(__dirname, '../model/model.js'));

async function insertContact(name, email) {
    const result = await model.insertContact(name, email)
    return result
}

async function getContacts() {
    const result = await model.getContacts()
    return result
}

async function deleteContact(id) {
    const result = await model.deleteContact(id)
    return result
}

async function updateContact(id, name, email) {
    const result = await model.updateContact(id, name, email)
    return result
}

//EXPORTA AS FUNCIONALIDADES
module.exports = {
    insertContact,
    getContacts,
    updateContact,
    deleteContact
}