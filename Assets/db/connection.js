const mysql = require("mysql");


const sqlConnect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password123",
    database: "employees_db"
});

sqlConnect.connect(function (error) {
    if (error) {
        throw error;
    }

});


module.exports = sqlConnect;