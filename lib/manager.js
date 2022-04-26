const employee = require('./employee');

const questions = [
    {
        type: "input",
        message: "Please enter the Manager's name: ",
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
        message: "Please enter the employee's office number: ",
        name: "officeNum",
    },
];

class manager extends employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    getRole() {
        return "Manager";
    }
    getOffice() {
        return this.officeNum;
    }
}

module.exports = { manager, questions };