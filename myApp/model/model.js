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

async function insertName(name) {
    const connection = await getConnectionMySQL()

    const result = await connection.query('INSERT INTO tbl_name SET tbl_name.name = ?', name);

    console.log(result.affectedRows > 0);
}

module.exports = {
    insertName
}

//DEBUG DA APLICACAO
async function debug() {
    await insertName('Wanderson Gomes')
}

debug()