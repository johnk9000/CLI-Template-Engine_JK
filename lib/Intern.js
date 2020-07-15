// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
        };

        // promptIntern() {
        //     return inquirer.prompt({ 
        //         type: 'input',
        //         name: 'school',
        //         message:`
        // What school did you graduate from most recently? 
        //         `
        //     })
        //}
}

module.exports = Intern;