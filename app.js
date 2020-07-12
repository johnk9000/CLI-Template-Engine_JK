var inquirer = require("inquirer");
const Employee = require("./lib/Employee")
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

inquirer.prompt(questions).then( (response) => {
    let name = response.name;
    let id = response.id;
    let email = response.email;
    let role = response.role;

    return new Employee(name, id, email, role);
});