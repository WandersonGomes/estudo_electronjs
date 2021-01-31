const mysql = require('promise-mysql')

const CONFIGURATION_CONNECT_MYSQL = {
    database: "myappdb",
    user: "myapp",
    password: "12345",
    host: "localhost",
    port: "3307"
}

async function getConnectionMySQL() {
    return await mysql.createConnection(CONFIGURATION_CONNECT_MYSQL)
}

async function insertContact(name, email) {
    try {
        const connection = await getConnectionMySQL()

        const myQuery = `INSERT INTO tbl_contact SET tbl_contact.name='${name}', tbl_contact.email = '${email}'`
        const result = await connection.query(myQuery)
        
        if (result.affectedRows > 0) {
            return {
                    sucess: true,
                    message: 'Contato inserido com sucesso!'
                }
        } else {
            return {
                sucess: false,
                message: 'Contato ja cadastrado!'
            }
        }
    } catch (error) {
        return {
            sucess: false,
            message: error
        }
    }
}

async function getContacts() {
    try {
        const connection = await getConnectionMySQL(CONFIGURATION_CONNECT_MYSQL)

        const myQuery = 'SELECT * FROM tbl_contact'
        
        const result = await connection.query(myQuery)
        
        return {
            sucess: true,
            message: result
        }
    } catch (error) {
        return {
            sucess: false,
            message: error
        }
    }
}

async function deleteContact(id) {
    try {
        const connection = await getConnectionMySQL(CONFIGURATION_CONNECT_MYSQL)
        const myQuery = `DELETE FROM tbl_contact WHERE tbl_contact.id=${id}`
        
        const result = await connection.query(myQuery)

        if (result.affectedRows > 0) {
            return {
                sucess: true,
                message: "Contato excluido com sucesso!"
            }
        } else {
            return {
                sucess: false,
                message: "Contato nao existe no banco de dados!"
            }
        }
    } catch (error) {
        return {
            sucess: false,
            message: error
        }
    }
}

async function updateContact(id, name, email) {
    try {
        const connection = await getConnectionMySQL(CONFIGURATION_CONNECT_MYSQL)
        const myQuery = `UPDATE tbl_contact SET tbl_contact.name = '${name}', tbl_contact.email = '${email}' WHERE tbl_contact.id = ${id}` 
        
        const result = await connection.query(myQuery)

        if (result.affectedRows > 0) {
            return {
                sucess: true,
                message: "Contato atualizado com sucesso!"
            }
        } else {
            return {
                sucess: false,
                message: "Contato nao existe no banco de dados!"
            }
        }
    } catch (error) {
        return {
            sucess: false,
            message: error
        }
    }
}

//EXPORTACAO DAS FUNCIONALIDADES
module.exports = {
    insertContact,
    getContacts,
    updateContact,
    deleteContact
}

//DEBUG
async function debug() {
    await getContacts()
}

//debug()