const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template");
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');