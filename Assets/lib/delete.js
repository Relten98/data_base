// Import dependancies
var inquirer = require("inquirer");
const connection = require("./db/connection");
const stepOne = require("../app");

// Yeets the department

function deleteDepart() {
    sqlConnect.query(`SELECT * FROM department`, function (err) {
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
                sqlConnect.query(
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
    sqlConnect.query(`SELECT * FROM roles`, function (err) {
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
                sqlConnect.query(
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

function removeEmployee() {
    sqlConnect.query(`SELECT * FROM employee`, function (err) {
        if (err) throw err;
        inquirer
            .prompt([{
                name: "removeEmployee",
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
                sqlConnect.query(
                    "DELETE FROM employee WHERE ?",
                    {
                        id: answer.deleteEmployee
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log(`Employee ${answer.deleteEmployee} has been removed.`);
                        stepOne.stepOne();
                    }
                )
            });
    });
};

    module.exports = { manage }