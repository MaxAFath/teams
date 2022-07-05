const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateCards = teamMember => {

    for (let i = 0; i < teamMember.length-1; i++) {
        if (teamMember[i].getRole() === 'Manager') {
            return `
        <section class="card flex-col">
            <div class="title flex-box">
            <h2 class="title">${teamMember[i].getName()}</h1>
            <h2 class="title>${teamMember[i].getRole()}</h2>
            </div>
            <div class='flex-row box'>
                <p>${teamMember[i].getId()}</p>
                <p>${teamMember[i].getEmail()}</p>
                <p>${teamMember[i].getOffice()}</p>
            </div>
        </section>
        `;
        }
        else if (teamMember[i].getRole() === 'Engineer') {
            return`
            <section class="card flex-col">
            <div class="title flex-box">
            <h2 class="title">${teamMember[i].getName()}</h1>
            <h2 class="title>${teamMember[i].getRole()}</h2>
            </div>
            <div class='flex-row box'>
                <p>${teamMember[i].getId()}</p>
                <p>${teamMember[i].getEmail()}</p>
                <p>${teamMember[i].getGithub()}</p>
            </div>
        </section>
            `;
         }
        else if (teamMember[i].getRole() === 'Intern') {
            return`
            <section class="card flex-col">
            <div class="title flex-box">
            <h2 class="title">${teamMember[i].getName()}</h1>
            <h2 class="title>${teamMember[i].getRole()}</h2>
            </div>
            <div class='flex-row box'>
                <p>${teamMember[i].getId()}</p>
                <p>${teamMember[i].getEmail()}</p>
                <p>${teamMember[i].getSchool()}</p>
            </div>
        </section>
            `;
         }
        else { console.log('Something went wrong run it again to see')}
    }
}

module.exports = tempplateData => {

    return (`
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
        <div class="container flex-row justify-space-between alignt-center py-3">
            <h1 class="page-title" bg-dark py-2 px-3">Your Team</h1>
        </div>
    </header>
    <main>
        ${generateCards(tempplateData)}
    </main>
  </body>
    `)
}