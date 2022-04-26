const employee = require('./employee');

const questions = [
    {
        type: "input",
        message: "Please enter the employee's name: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the employee's ID: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the employee's email address: ",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the school employee attends: ",
        name: "school",
    },
];

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = { intern, questions };