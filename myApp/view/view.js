const path = require('path')
const controller = require(path.resolve(__dirname, '../controller/controller.js'))

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
                            <button type="button" class="btn btn-warning m-1" onclick="insertUpdateForm(${element.id}, '${element.name}', '${element.email}')" data-bs-toggle="modal" data-bs-target="#modal-form-update">Update</button>
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

    if (authorization) {
        printMessage('loading', null);
        
        const result = await controller.deleteContact(id)
        
        if (result.sucess === true) {
            document.getElementById(trId).remove()
            printMessage('sucess', result.message)
        } else {
            printMessage('error', result.message)
        }
    }
}

//===========================FUNCAO PARA ATUALIZAR O CONTATO=========================
function insertUpdateForm(id, name, email) {
    const inputIdUpdate = document.getElementById('input-txt-id-update')
    const inputEmailUpdate = document.getElementById('input-txt-email-update')
    const inputNameUpdate = document.getElementById('input-txt-name-update')

    inputIdUpdate.value = id
    inputEmailUpdate.value = email
    inputNameUpdate.value = name
}


const formUpdate = document.getElementById('form-update');
const modalFormUpdate = document.getElementById('modal-form-update')
formUpdate.addEventListener('submit', async (event) => {
    event.preventDefault()
    //fecha o modal
    const modal = bootstrap.Modal.getInstance(modalFormUpdate)
    modal.hide()

    //adiciona o loading
    printMessage('loading', null)

    const inputId = document.getElementById('input-txt-id-update');
    const inputName = document.getElementById('input-txt-name-update');
    const inputEmail = document.getElementById('input-txt-email-update');

    const id = inputId.value;
    const name = inputName.value;
    const email = inputEmail.value;

    inputId.value = ''
    inputName.value = ''
    inputEmail.value = ''

    const result = await controller.updateContact(id, name, email);

    if (result.sucess) {
        printMessage('sucess', result.message)
    } else {
        printMessage('error', result.message)
    }

    await printContacts()
})



//===============================FUNCOES QUE SAO CHAMADAS LOGO NO INICIO=============
async function init() {
    await printContacts()
}

init()