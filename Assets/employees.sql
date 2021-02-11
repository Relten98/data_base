create database employee_db;

use employee_db;

create table employee (
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id integer,
manager_id integer
);

create table roles (
title varchar(30) not null,
salary decimal
);

create table department (
department_name varchar(30)
);