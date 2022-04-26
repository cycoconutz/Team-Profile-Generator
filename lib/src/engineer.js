const employee = require('./employee');

const questions = [
    {
        type: "input",
        message: "Please enter the employee's name. ",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the employee's ID. ",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the employee's email address. ",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the employee's GitHub username. ",
        name: "gitName",
    },
];

class engineer extends employee {
    constructor(name, id, email, gitName) {
        super(name, id, email)
        this.gitName = gitName;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitName;
    }
}

module.exports = { engineer, questions };