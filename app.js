const inquirer = require("inquirer");
const util = require("util");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
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
        type: "checkbox",
        name: "role",
        message:`
        Choose Role`,
        choices: [
            "Intern",
            "Manager",
            "Engineer"
        ]
    },
];

function prompt()  {

    return inquirer.prompt(questions);
}

// function promptEngineer {
//     return inquirer.prompt({ 
//         type: 'input',
//         name: 'gitHub',
//         message:`
// Enter github username: 
//         `
//     })
// }

// function promptEngineer {
//     return inquirer.prompt({ 
//         type: 'input',
//         name: 'gitHub',
//         message:`
// Enter github username: 
//         `
//     })
// }


async function init() {
    try {
        const test = await prompt();
        const role = test.role.toString();
        var persona = new Employee(test.name, parseInt(test.id), test.email, role);
        if(role === 'Engineer') {
        console.log(test.role.toString());
    } else if(role === 'Manager') {

    } else if(role === 'Intern') {

    }
    } catch(err) {
        console.log(err)
    }
    console.log('writing answers')
}


init();