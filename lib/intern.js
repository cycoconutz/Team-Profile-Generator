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
        name: "schoolName",
    },
];

class intern extends employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)
        this.schoolName = schoolName;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.schoolName;
    }
}

module.exports = { intern, questions };