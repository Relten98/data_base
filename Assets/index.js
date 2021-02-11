
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

const employeeArray {
    
}