var inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
// const Intern = require("./lib/Intern")
// const Manager = require("./lib/Manager")
const questions = [
    {
        type: 'input',
        message: 'Enter your name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter your id',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter your e-mail',
        name: 'email'
    },
    {
        type: 'checkbox',
        message: 'What is your role?',
        name: 'role',
        choices: [
            'Intern',
            'Engineer',
            'Manager'
        ]
    },
]

// function askForInfo() {
//     inquirer.prompt(questions).then( (response) => {
//         return new Employee(response.name, response.id, response.email, response.role);
//     })
// }

let test = {
    name: 'John Kim',
    id: 420,
    email: 'johnk9000@gmail.com',
    role: 'engineer',
    gitHub: 'johnk9000'
}
var persona = new Employee(test.name, test.id, test.email, test.role);
    console.log(persona);


if(persona.role === 'engineer'){
    var profile = new Engineer(test.name, test.id, test.email, test.role, test.gitHub)

    console.log(profile);
}

module.exports = profile;