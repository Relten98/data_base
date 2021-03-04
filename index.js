
// Dependencies:
const express = require("express"); // Calls in express
let mysql = require("mysql"); // The mysql database
let inquirer = require("inquirer"); // For interacting with the user via the command-line
require("console.table"); // Makes info pretty, or so I have been told.

// MySQL info condensed for your entertainment.
let configProp = {
    host: "localhost",
    // Port; if not 3306
    port: 3306,
    // Username
    user: "root",
    // Password & db
    password: "root",
    database: "employee_db"
};

let connection = mysql.createConnection(configProp);

// mySQL connection
connection.connect(function (err) {
    if (err) throw err; // Ha ha, this isn't going to be the bane of my existence.

    console.log('Welcome!'); // Pointless welcome message, but okay.

    start(); // The real magic that starts this out.
})

// Probably a pointless express call.
const app = express();

function start() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Menu',
            choices: [
                "View All Employees",
                "Add An Employee",
                "Remove An Employee",
                "View All Employees By Department",
                "View All Roles",
                "Update Employee Role",
                "View All Employees By Manager",
                "Update Employee Manager",
                "End"
            ]
        });

        .then((action) => {
            switch (answer.action) {
                // There has got to be a better way to do this... This is just... Super repetative...
                case "View all employees":
                    viewAllEmp();
                    break;

                case "Add An Employee":
                    newEmp();
                    break;

                case "Remove An Employee":
                    removeEmp();
                    break;

                case "View All Employees By Department":
                    allbyDepartment();
                    break;

                case "View All Roles":
                    allRoles();
                    break;

        })
}
// Express time? Express time.
const app = express();
