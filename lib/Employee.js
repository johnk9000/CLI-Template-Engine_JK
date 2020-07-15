const inquirer = require("inquirer");
const util = require("util");
// const Engineer = require('./Engineer');
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");
let count = 0;

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
    constructor() {
        // check for 'name' parameter: refer to ../test/Employee.test.js lines 
        // if (typeof name !== "string" || !name.trim().length) {
        //     throw new Error("Expected parameter 'name' to be a non-empty string");
        //   }

        // if (typeof id !== "number" || isNaN(id) || id < 0) {
        //     throw new Error("Expected parameter 'id' to be a non-negative number");
        //     }

        // if (typeof email !== "string" || !email.trim().length) {
        //     throw new Error("Expected parameter 'email' to be a non-empty string");
        //     }

        // if (typeof role !== "string" || !role.trim().length) {
        //     throw new Error("Expected parameter 'role' to be a non-empty string");
        //     }

        // if(typeof role === "string" && role.trim() !== 'Manager' && role.trim() !== "Intern" && role.trim() !== "Engineer") {
        //     throw new Error("Invalid role was specified");
        //     }
        
        
    }

    getName() {
        return inquirer.prompt(questions[0]);
    }

    getId() {
        return inquirer.prompt(questions[1]);
    }

    getEmail() {
        return inquirer.prompt(questions[3]);
    }

    getRole() {
        return inquirer.prompt(questions[4]);
    }

    init() {
        this.name = this.getName();
        this.id = this.getId();
        this.email = this.getEmail();
        this.role = this.getRole();
    }
}

// The main prompt which will ask users for name, id, e-mail, and their role

module.exports = Employee;