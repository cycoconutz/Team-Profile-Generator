const fs = require("fs");
const inquirer = require("inquirer");
const html = require("./src/html-boilerplate");
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

const empType =
{
    type: "list",
    message: "Would you like to add an engineer or an intern?",
    name: "empType",
    choices: ["Engineer", "Intern"],
};

const init = () => {
    promptManager()
}

const promptManager = () => {
    console.log("To get started, enter information about the Manager of this team");
    inquirer
        .prompt(manager.questions)
        .then((response) => {
            genManager(response);
        })
}

const promptEngineer = () => {
    inquirer
        .prompt(engineer.questions)
        .then((response) => {
            genEngineer(response);
        })
}

const promptIntern = () => {
    inquirer
        .prompt(intern.questions)
        .then((response) => {
            genIntern(response);
        })
}

const continueQ = () => {
    inquirer
        .prompt(anotherPrompt)
        .then((response) => {
            switch (response.addAnother) {
                case "Yes":
                    promptEmployeeType();
                    break;
                default:
                    writeToFile("./dist/team.html", html.genHTML())
                    break;
            }
        })
}

const genManager = (data) => {
    const { name, id, email, officeNum } = data
    const newManager = new manager.manager(name, id, email, officeNum);
    html.genCard(newManager)
    continueQ();
}

const genEngineer = (data) => {
    const { name, id, email, gitName } = data
    const newEngineer = new engineer.engineer(name, id, email, gitName);
    html.genCard(newEngineer)
    continueQ();
}

const genIntern = (data) => {
    const { name, id, email, schoolName } = data
    const newIntern = new intern.intern(name, id, email, schoolName);
    html.genCard(newIntern)
    continueQ();
}

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

const writeToFile = (fileName, data) => {
    let parsedData = `${data}`
    fs.writeFile('index.html', parsedData, (err) =>
        err ? console.error(err) : console.log('Success!'));
}

init();