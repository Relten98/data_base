// Inquirer information
const inquirer = require("inquirer"); // For interacting with the user via the command-line
const mysql = require("mysql");
// Dependencies:
const manage = require("./manage/manage"); // Our little manager
const view = require("./manage/view"); // Organizes views

const sqlConnect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password123",
    database: "employee_db"
});

sqlConnect.connect(function (error) {
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

            // } else if (answer === "Remove Employee") {
            //     manage.removeData();

            } else if (answer === "View All By Department") {
                view.viewbyDept();

            } else if (answer === "View All Roles") {
                view.viewRoles();

            // } else if (answer === "Update Employee Role") {
            //     manage.updateData();

            } else if (answer === "View All Departments") {
                view.viewDept();

            } else {
                console.log("Goodbye yellow brick road!")
                sqlConnect.end();
            }
        });
}


//Adding a department, role, or employee

exports.stepOne = stepOne;
stepOne();