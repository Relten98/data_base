
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
    
    exit: "End"
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
function viewAllEmployees() {
    const query = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee 
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`;
}