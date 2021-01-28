const path = require('path')
const model = require(path.resolve('model/model.js'));

async function insertName(name) {
    const result = await model.insertName(name)
    return result
}

//EXPORTA AS FUNCIONALIDADES
module.exports = {
    insertName
}