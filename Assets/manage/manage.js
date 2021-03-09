// Import dependancies
var inquirer = require("inquirer");
const sqlConnect = require("../db/connection");
const stepOne = require("../index");


// 
// 
//                              ADD NEW DATA
// 
// 

// Prompt for adding a new department
function addDepart() {
    inquirer
        .prompt({
            name: "addDepartment",
            type: "input",
            message: "What name do you want for this department?",
        }).then(function (answer) {
            sqlConnect.query(
                `INSERT INTO department SET ?`,
                {
                    department_name: answer.addDepartment
                },
                function (err, res) {
                    if (err) throw err;
                    console.table("New Department has been added!", results)
                    stepOne.stepOne();
                }
            );
        })
}
// Prompt for adding a new role
function addRole() {
    connection.query(`SELECT * FROM department`, function (err, res) {
        if (err) throw err;
        console.table(res);
        inquirer
            .prompt([{
                name: "addDepart",
                type: "list",
                choices: function () {
                    var departArray = [];
                    for (var i = 0; i < res.length; i++) {
                        departArray.push(res[i].id);
                    }
                    return departArray;
                },
                message: "What department does this role belong to?",
            },
            {
                name: "addRole",
                type: "input",
                message: "What name do you want for this role?",
            },
            {
                name: "addSalary",
                type: "input",
                message: "What is the salary?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            ]).then(function (answer) {
                sqlConnect.query(
                    "INSERT INTO role SET ?",
                    {
                        role_title: answer.addRole,
                        salary: answer.addSalary,
                        department_id: answer.addDepart
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log("New Role has been added!");
                        stepOne.stepOne();
                    }
                );
            })
    })
}
function addEmployee() {
    sqlConnect.query(
        `SELECT e.first_name, e.last_name, e.id AS employee_id, r.id AS role_id, r.role_title, d.department_name
        FROM employee e
        LEFT JOIN employee em ON e.manager_id = em.id
        INNER JOIN role r ON e.role_id = r.id
        INNER JOIN department d ON r.department_id = d.id
        ORDER BY e.id`,
        function (err, res) {
            console.table(res);
            inquirer
                .prompt([{
                    name: "addEmployeeFirstName",
                    type: "input",
                    message: "What the first name of the employee?",
                },
                {
                    name: "addEmployeeLastName",
                    type: "input",
                    message: "What's the last name of the employee?",
                },
                {
                    name: "addEmployeeRole",
                    type: "list",
                    message: "What is the employee's role?",
                    choices: function () {
                        var roleArray = [];
                        for (var i = 0; i < res.length; i++) {
                            roleArray.push(res[i].role_id);
                        }
                        let removeDups = new Set(roleArray)
                        let newRoleArr = [...removeDups];
                        return newRoleArr;
                    },
                },
                ]).then(function (answer) {
                    sqlConnect.query(
                        "INSERT INTO employee SET ?",
                        {
                            first_name: answer.addEmployeeFirstName,
                            last_name: answer.addEmployeeLastName,
                            role_id: answer.addEmployeeRole,
                        },
                        function (err, res) {
                            if (err) throw err;
                            console.log("New employee has been added!");
                            stepOne.stepOne();
                        }
                    );
                })
        }
    )
}

// 
// 
//                                 DATA DELETION
// 
// 
// 

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


// 
// 
//                              UPDOG INFORMATION
// 
//

function updateData() {
    inquirer
        .prompt({
            name: "update",
            type: "list",
            message: "What do you want to update an employee's role?",
            choices: ["Yes", "Go Back to Main Menu"]
        }).then(function (answer) {
            if (answer.update === "Yes") {
                updateRole();
            } else {
                stepOne.stepOne();
            }
        })
}

function updateRole() {
    sqlConnect.query(`
        SELECT e.first_name, e.last_name, e.id AS employee_id, r.role_title, r.id AS role_id, d.department_name
        FROM employee e
        LEFT JOIN employee em ON e.manager_id = em.id
        INNER JOIN role r ON e.role_id = r.id
        INNER JOIN department d ON r.department_id = d.id
        ORDER BY r.id`, function (err, res) {
        if (err) throw err;
        console.table(res);
        inquirer
            .prompt([{
                name: "updateEmployee",
                type: "list",
                choices: function () {
                    var empArray = [];
                    for (var i = 0; i < res.length; i++) {
                        empArray.push(res[i].last_name);
                    }
                    return empArray;
                },
                message: "What employee's role do you want to update?",
            },
            {
                name: "updateRole",
                type: "list",
                choices: function () {
                    var employRoles = [];
                    for (var i = 0; i < res.length; i++) {
                        employRoles.push(res[i].role_id);
                    }
                    let removeRoleDups = new Set(employRoles)
                        let newRoleArr = [...removeRoleDups]; 
                        return newRoleArr;
                },
                message: "What role are you seeking to change it to?",
            },
            ]).then(function (answer) {
                sqlConnect.query(
                    `UPDATE employee SET ?
                     WHERE last_name = "${answer.updateEmployee}"`,
                    {
                        roles_id: answer.updateRole,
                    },
                    function (err, results) {
                        if (err) throw err;
                        console.log("New Role has been added!");
                        updateData();
                    }
                );
            })
    })
}
    module.exports = {manage}