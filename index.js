const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const validator = require('email-validator');
const isNumber = require('is-number');
const template = require('./template');

//objects
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var team = []//array of employee objects
var idArray = []//array of ids to prevent multiplus of same ids.

function makeTeam() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: 'Manager name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Enter the manager name');
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'mEmail',
            message: 'Enter manager email',
            validate: answerInput => {
                if (validator.validate(answerInput)) {
                    return true;
                }
                else {
                    console.log("enter a valid email");
                    return false;
                }
            }
        }, {
            type: 'input',
            name: 'office',
            message: "What is manager's office number?",
            validate: answerInput => {
                if (isNumber(answerInput)) {
                    return true;
                }
                else {
                    console.log('Enter a number');
                    return false;
                }
            }

        }, {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID number?",
            validate: answer => {
                if (isNumber(answer)) {
                    return true;
                }
                else {
                    console.log('Enter a ID number');
                    return false;
                }
            }
        }
    ])
        .then(answer => {
            const manager = new Manager(answer.mName, answer.mEmail, answer.id, answer.office)
            team.push(manager);
            idArray.push(answer.id);
            teamPorompt();
        })

}

function addEmployee(role) {
    if (role === 'Engineer') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'mName',
                message: 'Manager name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Enter the manager name');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'mEmail',
                message: 'Enter manager email',
                validate: answerInput => {
                    if (validator.validate(answerInput)) {
                        return true;
                    }
                    else {
                        console.log("enter a valid email");
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'github',
                message: "What is the Engineer's github name?"

            }, {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's ID number?",
                validate: answer => {
                    if (isNumber(answer)) {
                        return true;
                    }
                    else {
                        console.log('Enter a ID number');
                        return false;
                    }
                }
            }
        ])
            .then(answer => {
                const engineer = new Engineer(answer.mName, answer.mEmail, answer.id, answer.github)
                team.push(engineer);
                idArray.push(answer.id);
                teamPorompt();
            })
    }
    else if (role === 'Intern') {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'mName',
                message: 'Manager name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Enter the manager name');
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'mEmail',
                message: 'Enter manager email',
                validate: answerInput => {
                    if (validator.validate(answerInput)) {
                        return true;
                    }
                    else {
                        console.log("enter a valid email");
                        return false;
                    }
                }
            }, {
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?"

            }, {
                type: 'input',
                name: 'id',
                message: "What is the Manager's ID number?",
                validate: answer => {
                    if (isNumber(answer)) {
                        return true;
                    }
                    else {
                        console.log('Enter a ID number');
                        return false;
                    }
                }
            }
        ])
            .then(answer => {
                const intern = new Intern(answer.mName, answer.mEmail, answer.id, answer.school)
                team.push(intern);
                idArray.push(answer.id);
                teamPorompt();
            })
    }
}

function teamPorompt() {
    return inquirer.prompt({
        type: 'list',
        name: 'member',
        choices: ['Engineer', 'Intern', 'Done building team']
    }).then(answer => {
        var role = "";
        if (answer === 'Engineer') {
            role = 'Engineer';
            addEmployee(role);
        } else if (answer === 'Intern') {
            role = 'Intern';
            addEmployee(role);
        } else {
            const teamPage = template(team);
            fs.writeFile('./src/index.html', teamPage, err => {
                if (err) throw new Error(err);
            })
        }
    })

}