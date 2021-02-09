
const express = require("express");
const mysql = require("mysql");

const { createConnection } = require("net");
const { hostname } = require("os");

const app = express();

// My basic as hell code using my ultra-high security password- NSA, I'm looking for work.


//// Connections I guess???? Don't have interent, so I hope this works

mysql.createConnection({

host: "localhost",


user: userName,
password: : passwordNum,
database:"nodemysql",

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