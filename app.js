const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const render = require("./lib/htmlRenderer");
const renderPage = require("./lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);
let count = 0;

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
    -- Choose Role --`,
        choices: [
            "Intern",
            "Manager",
            "Engineer",
        ]
    },
];
// The main prompt which will ask users for name, id, e-mail, and their role
function prompt()  {
    count++;
        console.log('Starting new profile');
    return inquirer.prompt(questions);
}
// One of the folloiwing three prompts will be called in init *after* usr 'role' is defined
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
const fileName = "../lib/cache.txt"

var employees = fs.readFileSync(fileName, 'utf-8');
if(employees !== "") {
    employees = JSON.parse(employees);
} else {
    employees = [];
}
async function init() {
    let len = employees.length;
    let order = await startCommand();
    order = order.file.toString();
        //console.log(order);
    if(order === "Create a Profile") {
        try {
            const test = await prompt();
            const role = test.role.toString();
            var persona = new Employee(test.name, parseInt(test.id), test.email, role);
            // Role specific prompts and construction of one of three class extensions
            if(role === 'Engineer') {
                const username = await promptEngineer()
                var engineer = new Engineer(test.name, parseInt(test.id), test.email, role, username.gitHub)
                        //engineer = JSON.stringify(engineer);
                        //console.log("Engineer's profile data: " + engineer);
                    employees.push(engineer)
                    if(len < employees.length) {
                        init()
                    }

            } else if(role === 'Manager') {
                const office = await promptManager()
                var manager = new Manager(test.name, parseInt(test.id), test.email, role, office.officeNum)
                        //manager = JSON.stringify(manager);
                        //console.log("Manager's profile data: " + manager);
                    employees.push(manager)
                    if(len < employees.length) {
                        init()
                    }


            } else if(role === 'Intern') {
                const uni = await promptIntern()
                var intern = new Intern(test.name, parseInt(test.id), test.email, role, uni.school)
                        //intern = JSON.stringify(intern);
                        //console.log("Intern's profile data: " + intern);
                    employees.push(intern)
                        console.log("employees: " + employees.length);
                        //console.log(len)
                        if(len < employees.length) {
                            init();
                        }
    

            } else {
                console.log('error')

            }
        } catch(err) {
            console.log(err)
        }
        
    } else if (order === "Clear Cache") {
        await writeFileAsync(fileName, "");
    } else if (order == "Save All & Exit"){
        employees = JSON.stringify(employees);
        //console.log(employees)
        fs.writeFileSync(fileName, employees)//RENDER HTML HERE
        let newFile = fs.readFileSync(fileName, 'utf-8');
        if(newFile.length == employees.length) {
            renderPage();
            console.log('Cards have been rendered... Exiting...')
        } else {
        console.log('Exiting...')
        }
    }

}

function startCommand() {
    return inquirer.prompt({
        type: 'list',
        message: new inquirer.Separator(),
        name: 'file',
        choices: [
            "Create a Profile",
            "Save All & Exit",
            new inquirer.Separator(),
            "Clear Cache",
            new inquirer.Separator(),
    ]
    })
}

init();
// init Fcn that will asyncronously run prompts and await answers before kicking off the next series of prompts
//module.exports = init();