const path = require('path')
const model = require(path.resolve('model/model.js'));

function helloWorld() {
    console.log("Controller: Hello, World!")
    model.helloWorld()
}

module.exports = {
    helloWorld
}