// Dependencies:
const addData = require("./lib/add.js"); // scripts to add information
const remove = require("./lib/delete"); // scripts to remove information
const update = require("./lib/update"); // Update script
const view = require("./lib/view"); // Organizes views

// Inquirer information
const inquirer = require("inquirer"); // For interacting with the user via the command-line
const mysql = require("mysql");

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


connection.connect(function (error) {
    if (error) {
        throw error;
    }
});

function stepOne() {
    inquirer
        .prompt({
            name: "first",
            type: "list",
            message: "Hello, what would you like to do today?",
            choices: [
                "View All Employees",
                "Add Employee",
                "Remove Employee",
                "View All By Department",
                "Remove Department",
                "View All Roles",
                "Update Employee Role",
                "Remove Role",
                // "View All By Manager",
                // "Update Manager",
                "End"
            ]

        }).then(function (answer) {
            if (answer === "View All Employees") {
                view.viewAll();

            } else if (answer === "Add Employee") {
                addData.addEmployee();

            } else if (answer === "Remove Employee") {
                remove.removeEmp();

            } else if (answer === "View All By Department") {
                view.viewbyDept();

            } else if (answer === "Remove Department") {
                remove.deleteDepart();

            } else if (answer === "View All Roles") {
                view.viewRoles();

            } else if (answer === "Update Employee Role") {
                update.updateData();

            } else if (answer === "Remove Role") {
                remove.deleteRole();

            } else {
                console.log("Goodbye yellow brick road!")
                connection.end();
            }
        });
}
stepOne();

//Adding a department, role, or employee
exports.stepOne = stepOne;