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

function promptEngineer() {
    return inquirer.prompt({ 
        type: 'input',
        name: 'gitHub',
        message:`
Enter github username: 
        `
    })
}

function promptManager() {
    return inquirer.prompt({ 
        type: 'input',
        name: 'officeNum',
        message:`
Enter your office number: 
        `
    })
}

function promptIntern() {
    return inquirer.prompt({ 
        type: 'input',
        name: 'school',
        message:`
What school did you graduate from most recently? 
        `
    })
}


async function init() {
    try {
        const test = await prompt();
        const role = test.role.toString();
        var persona = new Employee(test.name, parseInt(test.id), test.email, role);

        if(role === 'Engineer') {
            const username = await promptEngineer();
            var engineer = new Engineer(test.name, parseInt(test.id), test.email, role, username.gitHub)
                console.log("Engineer's profile data: " + JSON.stringify(engineer));
        } else if(role === 'Manager') {
            const office = await promptManager();
            var manager = new Manager(test.name, parseInt(test.id), test.email, role, office.officeNum)
                console.log("Manager's profile data: " + manager.toString());
        } else if(role === 'Intern') {
            const uni = await promptIntern();
            var intern = new Intern(test.name, parseInt(test.id), test.email, role, uni.school)
                console.log("Intern's profile data: " + intern.toString());
        } else {
            console.log('error')
        }
    } catch(err) {
        console.log(err)
    }
    console.log('writing answers')
}


init();