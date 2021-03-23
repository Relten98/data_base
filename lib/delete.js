// Import dependancies
var inquirer = require("inquirer");
const stepOne = require("../app");
const connection = require("../db/connection");

connection.connect(function (error) {
    if (error) {
        throw error;
    }
});


// Yeets the department

function deleteDepart() {
    connection.query(`SELECT * FROM department`, function (err) {
        if (err) throw err;
        inquirer
            .prompt([{
                name: "deleteDepart",
                type: "list",
                choices: function () {
                    var departArray = [];
                    for (var i = 0; i < res.length; i++) {
                        departArray.push(res[i].department_name);
                    }
                    return departArray;
                },
                message: "What department would you like to remove?",
            }]).then(function (answer) {
                connection.query(
                    "DELETE FROM department WHERE ?",
                    {
                        department_name: answer.deleteDepart
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log(answer.deleteDepart + ' has now been removed!');
                        stepOne.stepOne();
                    }
                )
            });
    });

};
// Deletes a role

function deleteRole() {
    connection.query(`SELECT * FROM roles`, function (err) {
        if (err) throw err;
        inquirer
            .prompt([{
                name: "deleteRole",
                type: "list",
                choices: function () {
                    var empArray = [];
                    for (var i = 0; i < res.length; i++) {
                        empArray.push(res[i].roles_title);
                    }
                    return empArray;
                },
                message: "Which role would you like to remove?",
            }]).then(function (answer) {
                connection.query(
                    "DELETE FROM roles WHERE ?",
                    {
                        roles_title: answer.deleteRole
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log(answer.deleteRole + ' has now been removed!');
                        stepOne.stepOne();
                    }
                )
            });

        });
};
// Deletes an employee

function removeEmp() {
    connection.query(`SELECT * FROM employee`, function (err) {
        if (err) throw err;
        inquirer
            .prompt([{
                name: "removeEmp",
                type: "list",
                choices: function () {
                    var empArray = [];
                    for (var i = 0; i < res.length; i++) {
                        empArray.push(res[i].id);
                    }
                    return empArray;
                },
                message: "Which employee would you like to remove?",
            }]).then(function (answer) {
                connection.query(
                    "DELETE FROM employee WHERE ?",
                    {
                        id: answer.removeEmp
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log(`Employee ${answer.removeEmp} has been removed.`);
                        stepOne.stepOne();
                    }
                )
            });
    });
};
let remove = {};
module.exports = { remove }