const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

 
 

function renderPage() {
  var employees = fs.readFileSync('cache.txt', 'utf-8');
  if(employees === "") {
    console.log("Reading cache... No saved employees on record")
    employees = [];
 } else {
  employees = JSON.parse(employees);
  //console.log("htmlRender employee obj: " + employees);
  console.log("Reading cache... there are " + employees.length + " employee records saved");
 }
 
  try {
  const topHtml = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>JK's Team</title>
      <link rel="stylesheet" href="style.css">
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
    let fileName = '../output/index.html';
  writeFileAsync(fileName, topHtml);
  let count = 1;
  employees.forEach(employee => {
    
    count++
    const role = employee.role;
        if(role === 'Engineer') {
            const engineerProfile =`
            <div class="card employee-card">
          <div class="card-header">
              <h2 class="card-title">${ employee.name }</h2>
              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ employee.role }</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${ employee.id }</li>
                  <li class="list-group-item">Email: <a href="mailto:${ employee.email }">${ employee.email }</a></li>
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
              <h2 class="card-title">${ employee.name }</h2>
              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ employee.role }</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${ employee.id }</li>
                  <li class="list-group-item">Email: <a href="mailto:${ employee.email }">${ employee.email }</a></li>
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
              <h2 class="card-title">${ employee.name }</h2>
              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ employee.role }</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${ employee.id }</li>
                  <li class="list-group-item">Email: <a href="mailto:${ employee.email }">${ employee.email }</a></li>
                  <li class="list-group-item">School: ${ employee.school }</li>
              </ul>
          </div>
      </div>
            ` 
              appendFileAsync(fileName, internProfile);
        }
      });
      if(count > employees.length) {
        appendFileAsync(fileName, bottomHtml);
      }
    } catch(err) {
      console.log(err)
    }
}

module.exports = renderPage;