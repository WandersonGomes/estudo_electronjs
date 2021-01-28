const path = require('path')
const controller = require(path.resolve('controller/controller.js'))

const form = document.getElementById("form-name")

form.addEventListener("submit", async function (event) {
    event.preventDefault()

    const inputName = document.getElementById("input-txt-name")
    const name = inputName.value
    const alertMessage = document.getElementById("message")

    const result = await controller.insertName(name)

    if (result) {
        inputName.value = ""
        alertMessage.innerHTML = "Inserido com sucesso!"
    } else {
        alertMessage.innerHTML = "Error ao inserir o nome!"
    }
})