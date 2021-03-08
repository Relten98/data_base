drop database if exists employee_db;
create database employee_db;
use employee_db;
create table employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name varchar(30) not null,
  last_name varchar(30) not null,
  role_id integer,
  manager_id integer,
  PRIMARY KEY (id) FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES department(id)
);
create table roles (
  id INT NOT NULL AUTO_INCREMENT,
  title varchar(30) not null,
  salary decimal,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);
create table department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name varchar(30)
PRIMARY KEY (id)
);