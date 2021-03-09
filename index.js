// Inquirer information
let inquirer = require("inquirer"); // For interacting with the user via the command-line

// Dependencies:
const sqlConnect = require("./db/connection"); // This is just the connection to the database

const manage = require("./manage/manage"); // Our little manager
const view = require("./manage/view"); // Organizes views

function stepOne() {
    inquirer
        .prompt({
            name: "first",
            type: "list",
            message: "Hello, what is your ?",
            choices: [
                "View All",
                "Add Employee",
                "Remove Employee",
                "View All By Department",
                "View All Roles",
                "Update Employee Role",
                "View All By Manager",
                "Update Manager",
                "End"
            ]
        
        }).then(function (answer) {
            if (answer === "View All Employees") {
                view.viewAll();

            } else if (answer === "Add Employee") {
                manage.addEmployee();

            } else if (answer === "Remove Employee") {
                manage.removeData();

            } else if (answer === "View All By Department") {
                view.viewbyDept();

            } else if (answer === "View All Roles") {
                view.viewRoles();

            } else if (answer === "Update Employee Role") {
                manage.updateData();

            } else if (answer === "View All By Manager") {
                view.viewbyManager();

            } else {
                console.log("Goodbye yellow brick road!")
                sqlConnect.end();
            }
        });
}


//Adding a department, role, or employee

exports.stepOne = stepOne;
stepOne();