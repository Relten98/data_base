
const express = require("express");
const mysql = require("mysql");
require('console.table');

const promptMessages = {
    viewEmployees: "View All Employees",
    newEmployee: "Add An Employee",
    deleteEmployee: "Remove An Employee",

    viewDepartments: "View All Employees By Department",
    viewRoles: "View All Roles",
    
    updateRole: "Update Employee Role",
    viewManagers: "View All Employees By Manager",
    
    updateEmployeeManager: "Update Employee Manager",
    
    exit: "E N D"
};

const { createConnection } = require("net");
const { hostname } = require("os");

const app = express();

// My basic as hell code using my ultra-high security password- NSA, I'm looking for work.


//// Connections I guess???? Don't have interent, so I hope this works

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // username
    user: 'root',

    // password

    // ultra high security password going on here.
    password: 'password123',

    database: 'employees'
});

// MySQL connector, I think.

db.connect((err)=>{
    if(err){
        
        throw err;

    }
    console.log("MySQL Connected!");

});

// ARRAY TIME OH YEAH
function prompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                promptMessages.viewAllEmployees,
                promptMessages.viewByDepartment,
                promptMessages.viewByManager,
                promptMessages.viewAllRoles,
                promptMessages.addEmployee,
                promptMessages.removeEmployee,
                promptMessages.updateRole,
                promptMessages.exit
            ]
        })
        .then(answer => {
            console.log('answer', answer);
            switch (answer.action) {
                case promptMessages.viewAllEmployees:
                    viewAllEmployees();
                    break;

                case promptMessages.viewByDepartment:
                    viewByDepartment();
                    break;

                case promptMessages.viewByManager:
                    viewByManager();
                    break;

                case promptMessages.addEmployee:
                    addEmployee();
                    break;

                case promptMessages.removeEmployee:
                    remove('delete');
                    break;

                case promptMessages.updateRole:
                    remove('role');
                    break;

                case promptMessages.viewAllRoles:
                    viewAllRoles();
                    break;

                case promptMessages.exit:
                    connection.end();
                    break;
            }
        });
}
