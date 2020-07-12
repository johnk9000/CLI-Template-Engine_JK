// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(gitHub, role) {
        this.gitHub = getGithub() {
            inquirer.prompt({
                type: 'input',
                message: 'github username?',
                name: 'gitHub'
            })
        };
        this.role = 'Engineer'
    }
}