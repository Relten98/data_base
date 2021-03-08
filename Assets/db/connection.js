const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "characters_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
});
module.exports = connection;