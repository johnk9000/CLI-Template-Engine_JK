const inquirer = require("inquirer");
const util = require("util");

// TODO: Write code to define and export the Employee class
var questions = [
    {
        type: "input",
        name: "name",
        message: `
    What is your name?
    `,
    },
    {
        type: "input",
        name: "id",
        message: `
    What is your badge number? 
    `  
    },
    {
        type: "input",
        name: "email",
        message: `
    Enter e-mail address: 
    `  
    },
    {
        type: "list",
        name: "role",
        message:`
        Choose Role`,
        choices: [
            "Intern",
            "Manager",
            "Engineer",
            new inquirer.Separator(),
            "Save All",
        ]
    },
];

class Employee {
    constructor(name, id, email, role) {
        // check for 'name' parameter: refer to ../test/Employee.test.js lines 
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
            }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
            }

        if (typeof role !== "string" || !role.trim().length) {
            throw new Error("Expected parameter 'role' to be a non-empty string");
            }

        if(typeof role === "string" && role.trim() !== 'Manager' && role.trim() !== "Intern" && role.trim() !== "Engineer") {
            throw new Error("Invalid role was specified");
            }
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

}

// The main prompt which will ask users for name, id, e-mail, and their role

module.exports = Employee;