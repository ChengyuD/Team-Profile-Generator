const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter manager name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter manager id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter manager email',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter manager office number?',
    },
  ])
  .then((data) => {
    genManagerHTML(new Manager(data.id, data.managerName, data.email, data.officeNumber));
    addEmployee();
});

function addEmployee() {
    inquirer
    .prompt(
    {
        type: 'list',
        message: 'Select an employee type',
        name: 'employeeType',
        choices: ['Engineer', 'Intern', 'No more employee'],
    })
    .then((data) => {
        console.log(data);
        switch(data.employeeType) {
            case 'Engineer': addEngineer(data); break;
            case 'Intern': addIntern(data); break;
            default: genPageHTML(); break;
        }
    });
}

function addEngineer(data) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter engineer name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter engineer id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter engineer email',
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter github user name',
        },
    ])
    .then((data) => {
        genEngineerHTML(new Engineer(data.id, data.engineerName, data.email, data.githubUsername));
        addEmployee();
    });
}

function addIntern(data) {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter intern name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter intern id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter inter email',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter inter school',
        },
    ])
    .then((data) => {
        genInternHTML(new Intern(data.id, data.internName, data.email, data.school));
        addEmployee();
    });
}

var bodyHTML = '';
function genManagerHTML(manager) {
    bodyHTML +=
        `
            <div class="card col s4">
                <div class="card-content">
                <h4>${manager.getName()}</h4>
                <h5>${manager.getRole()}</h5>
                <ul>
                    <li>ID: ${manager.getId()}</li>
                    <li>Email: ${manager.getEmail()}</li>
                    <li>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
                </div>
            </div>
        `;
}

function genEngineerHTML(engineer) {
    bodyHTML +=
        `
            <div class="card col s4">
                <div class="card-content">
                <h4>${engineer.getName()}</h4>
                <h5>${engineer.getRole()}</h5>
                <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <li>Email: ${engineer.getEmail()}</li>
                    <li>GitHub: ${engineer.getGithub()}</li>
                </ul>
                </div>
            </div>
        `;
}

function genInternHTML(intern) {
    bodyHTML +=
        `
            <div class="card col s4">
                <div class="card-content">
                <h4>${intern.getName()}</h4>
                <h5>${intern.getRole()}</h5>
                <ul>
                    <li>ID: ${intern.getId()}</li>
                    <li>Email: ${intern.getEmail()}</li>
                    <li>School: ${intern.getSchool()}</li>
                </ul>
                </div>
            </div>
        `;
}

function genPageHTML() {
    let pageHTML = 
`<!DOCTYPE html>
<html>
    <head>
        <title>Team organization</title>
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">My Team</a>
            </div>
        </nav>
        <div class="container row">
            ${bodyHTML}
        </div>
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
</html>
`;
    writeHTML(pageHTML);
}

function writeHTML(data) {
    fs.writeFile(`${__dirname}/dist/rendered.html`, data, function (err) {
        if (err) throw err;
        console.log('Generated and Saved!');
    });
}