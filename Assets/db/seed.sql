USE employee_db;

SELECT d.department_name AS Department, r.role_title AS Postion, r.salary AS Salary
FROM department d
RIGHT JOIN role r ON r.department_id = d.id
ORDER BY d.department_name;

SELECT role_title, salary FROM role
ORDER BY role_title; 

-- delete employees-- 
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department (department_name) VALUES ('Information Technology');
INSERT INTO department (department_name) VALUES ('Software Engineering');
INSERT INTO department (department_name) VALUES ('Sales');


INSERT INTO role (role_title, department_id, salary) VALUES ('IT Specialist', 1, 60000.00);
INSERT INTO role (role_title, department_id, salary) VALUES ('Software Developer', 2, 80000.00);
INSERT INTO role (role_title, department_id, salary) VALUES ('Sales Representative', 3, 50000.00);
INSERT INTO role (role_title, department_id, salary) VALUES ('Lead IT Specialist', 1, 70000.00);
INSERT INTO role (role_title, department_id, salary) VALUES ('Lead Software Developer', 2, 900000.00);
INSERT INTO role (role_title, department_id, salary) VALUES ('Sales Lead', 3, 65000.00);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jen','Barber', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bill','Lumbergh', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Micheal','Scott', 6, 3);


INSERT INTO employee (first_name, last_name, role_id) VALUES ('Bob','Ross', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Tory','Lenneman', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Peter','Simons', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Watson','Maliche', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Bacon','Boi', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('John','Doe', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Dwight','Eisenhower', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Adam','Zappel', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Mike','Hunter', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Blake','Stone', 3);