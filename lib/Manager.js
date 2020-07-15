// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNum = officeNum;
        };

        // promptManager() {
        //     return inquirer.prompt({ 
        //         type: 'input',
        //         name: 'officeNum',
        //         message:`
        // Enter your office number: 
        //         `
        //     })
        // }
        
}

module.exports = Manager;