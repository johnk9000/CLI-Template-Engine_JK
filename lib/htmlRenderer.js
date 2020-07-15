const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

var employees = fs.readFileSync('cache.txt', 'utf-8');
employees = JSON.parse(employees)
employees = [employees];
console.log(employees);
//const templatesDir = path.resolve(__dirname, "../templates");

function renderPage() {
  const topHtml = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">`
    const bottomHtml = `
          </div>
      </div>
  </div>
</body>

</html>
    `
    let fileName = 'index.html';
  writeFileAsync(fileName, topHtml);

employees.forEach(employee => {
  const role = employee.role;
      if(role === 'Engineer') {
          const engineerProfile =`
          <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">{{ name }}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${ employee.id }</li>
                <li class="list-group-item">Email: ${ employee.email } <a href="mailto:${ employee.email }">${ employee.email }</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${ employee.gitHub }" target="_blank" rel="noopener noreferrer">${ employee.gitHub }</a></li>
            </ul>
        </div>
    </div>
          `  
          appendFileAsync(fileName, engineerProfile);

      } else if(role === 'Manager') {
        const managerProfile =`
          <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">{{ name }}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${ employee.id }</li>
                <li class="list-group-item">Email: ${ employee.email } <a href="mailto:${ employee.email }">${ employee.email }</a></li>
                <li class="list-group-item">Office number: ${ employee.officeNumber }</li>
            </ul>
        </div>
    </div>
          `  
          appendFileAsync(fileName, managerProfile);

      } else if(role === 'Intern') {
        const internProfile =`
          <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">{{ name }}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${ employee.id }</li>
                <li class="list-group-item">Email: ${ employee.email } <a href="mailto:${ employee.email }">${ employee.email }</a></li>
                <li class="list-group-item">Office number: ${ employee.school }</li>
            </ul>
        </div>
    </div>
          ` 
            appendFileAsync(fileName, internProfile);
      }
    });
fs.appendFileSync(fileName, bottomHtml);
}

module.exports = renderPage;