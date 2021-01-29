const path = require('path')
const controller = require(path.resolve('controller/controller.js'))

//====================MESSAGES========================
function printMessage(type, message) {
    const boxMessage = document.getElementById('message-container');

    if (type === 'sucess') {
        boxMessage.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h4 class="alert-heading">Sucesso!</h4>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    } else if(type === 'error') {
        boxMessage.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <h4 class="alert-heading">Error!</h4>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    } else if (type === 'loading') {
        boxMessage.innerHTML = `
        <div class="container-spinner">
            <div class="lds-dual-ring"></div>
            <p class="txt-spinner">Loading...</p>
        </div>`
    } else if (type === 'close_loading') {
        boxMessage.innerHTML = ''
    }
}

//=================FORMULARIO================================
const formAdd = document.getElementById('form-add');
const modalFormAdd = document.getElementById('modal-form-add')
formAdd.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    //fecha o modal
    const modal = bootstrap.Modal.getInstance(modalFormAdd)
    modal.hide()

    //adiciona o loading
    printMessage('loading', null)

    const inputName = document.getElementById('input-txt-name');
    const inputEmail = document.getElementById('input-txt-email');

    const name = inputName.value;
    const email = inputEmail.value;

    inputName.value = ''
    inputEmail.value = ''

    const result = await controller.insertContact(name, email);

    if (result.sucess) {
        printMessage('sucess', result.message)
    } else {
        printMessage('error', result.message)
    }

    await printContacts()
})

//===========================RESULTADOS JA CADASTRADOS===================
async function printContacts() {
    const result = await controller.getContacts()
    printMessage('loading', null);
    if (result.sucess) {
        const contacts = result.message;

        const tableContacts = document.getElementById('table-contacts')
        tableContacts.innerHTML = ''

        contacts.forEach(element => {
            tableContacts.innerHTML += `
                    <tr id="contact-${element.id}">
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>
                        <div class="d-grid gap-2 d-md-block">
                            <button type="button" class="btn btn-warning m-1">Update</button>
                            <button type="button" class="btn btn-danger m-1" onclick="deleteContact('contact-${element.id}', ${element.id})">Delete</button>
                        </div>
                    </td>
                    </tr>
            `
        });
        printMessage('close_loading', null);
    } else {
        printMessage('error', result.message)
    }
}

//==============================FUNCAO PARA DELETAR CONTATO========================
async function deleteContact(trId, id) {
    const authorization = confirm("Tem certeza que deseja deletar o contato?");
    
    console.log(authorization)
}

//===============================FUNCOES QUE SAO CHAMADAS LOGO NO INICIO=============
async function inti() {
    await printContacts()
}

inti()