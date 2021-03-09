const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password123",
    database: "employee_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
});
// Needed for SQL One 
module.exports = connection;