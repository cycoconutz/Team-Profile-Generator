const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template");
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const anotherPrompt = {
    type: "list",
    message: "Would you like to add another employee?",
    name: "addAnother",
    choices: ["Yes", "No",],
};

// Employee type question to ask user if they select yes and want to create a new employee
const empType =
{
    type: "list",
    message: "Would you like to add an engineer or an intern?",
    name: "empType",
    choices: ["Engineer", "Intern"],
};

// init calls promptManager to kick off the process of asking for user information

const init = () => {
    promptManager()
}

// promptManager asks the questions needed to create a manager object
const promptManager = () => {
    console.log("To get started, enter information about the Manager of this team");
    inquirer
        .prompt(Manager.questions)
        .then((response) => {
            genManager(response);
        })
}
// asks questions to generate an engineer object
const promptEngineer = () => {
    inquirer
        .prompt(Engineer.questions)
        .then((response) => {
            genEngineer(response);
        })
}

// asks questions to generate an intern object
const promptIntern = () => {
    inquirer
        .prompt(Intern.questions)
        .then((response) => {
            genIntern(response);
        })
}

// function to ask the user whether or not they want to make another employee after they have created one, asks employee type if yes, writes generated html to file if no
const continueQ = () => {
    inquirer
        .prompt(anotherPrompt)
        .then((response) => {
            switch (response.addAnother) {
                case "Yes":
                    promptEmployeeType();
                    break;
                default:
                    writeToFile("./dist/team.html", pageTemplate.genHTML())
                    break;
            }
        })
}
// Creates a new manager object from user data and calls genCard to create the html for that object. After this is done, prompts the user to make another employee or writetoFile if they are finished making employees
const genManager = (data) => {
    const { name, id, email, officeNum } = data
    const newManager = new Manager.Manager(name, id, email, officeNum);
    pageTemplate.genCard(newManager)
    continueQ();
}

// Same as above but for engineers
const genEngineer = (data) => {
    const { name, id, email, gitName } = data
    const newEngineer = new Engineer.Engineer(name, id, email, gitName);
    pageTemplate.genCard(newEngineer)
    continueQ();
}

// Same as above but for interns
const genIntern = (data) => {
    const { name, id, email, schoolName } = data
    const newIntern = new Intern.Intern(name, id, email, schoolName);
    pageTemplate.genCard(newIntern)
    continueQ();
}

// Function to ask user what type of employee to make if they choose to make a new one
const promptEmployeeType = () => {
    inquirer
        .prompt(empType)
        .then((response) => {
            switch (response.empType) {
                case "Engineer":
                    promptEngineer();
                    break;
                default:
                    promptIntern();
                    break;
            }
        });
}

// Function to create html file from formatted data generated in page-template.js
const writeToFile = (fileName, data) => {
    let parsedData = `${data}`
    fs.writeFile(fileName, parsedData, (err) =>
        err ? console.error(err) : console.log('Success!'));
}

// Calls init when app is loaded
init();