// Import dependancies
var inquirer = require("inquirer");
const stepOne = require("../index");
const connection = require("../db/connection");

connection.connect(function (error) {
    if (error) {
        throw error;
    }
});



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
    connection.query(`
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
                connection.query(
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
let update = {};
module.exports = { update }