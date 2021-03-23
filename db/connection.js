// ARGH
/*
Have to use this file to connect to the database, it's cleaner, and more efficient anyways,
since it makes it easier to call the DB in one swoop, rather than repeatedly calling it every file.
*/
const mysql = require("mysql");
const util = require("util");

// Connects to the mySQL database
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