const sql = require("mssql")
const config = {
    user:'adminrahmah',
    password:'Rahmah180138$',
    server: 'server24.database.windows.net',
    database: 'shopping-rahma',
    options : {
        // trustServerCertificate: true
        encrypt: true
    }
}; //for database

sql.connect(config).catch(error => console.log(error));
module.exports = sql; // call the database outside..

