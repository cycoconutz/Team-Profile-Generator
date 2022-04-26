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
        message: "Please enter the employee's office number: ",
        name: "office",
    },
];

class manager extends employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
    }
    getRole() {
        return "Manager";
    }
    getOffice() {
        return this.office;
    }
}

module.exports = { manager, questions };