const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateCards = teamMember => {

    if (teamMember.getRole() === 'Manager') {
        return `
        <section class="card flex-col">
            <div class="title flex-box">
            <h2 class="title">${teamMember.getName()}</h1>
            <h2 class="title>${teamMember.getRole()}</h2>
            </div>
            <div class='flex-row box'>
                <p>${teamMember.getId()}</p>
                <p>${teamMember.getEmail()}</p>
                <p>${teamMember.getOffice()}</p>
            </div>
        </section>
        `;
    }
    else if (teamMember.getRole() === 'Engineer') {
        return `
            <section class="card flex-col">
            <div class="title flex-box">
            <h2 class="title">${teamMember.getName()}</h1>
            <h2 class="title>${teamMember.getRole()}</h2>
            </div>
            <div class='flex-row box'>
                <p>${teamMember.getId()}</p>
                <p>${teamMember.getEmail()}</p>
                <p>${teamMember.getGithub()}</p>
            </div>
        </section>
            `;
    }
    else if (teamMember.getRole() === 'Intern') {
        return `
            <section class="card flex-col">
            <div class="title flex-box">
            <h2 class="title">${teamMember.getName()}</h1>
            <h2 class="title>${teamMember.getRole()}</h2>
            </div>
            <div class='flex-row box'>
                <p>${teamMember.getId()}</p>
                <p>${teamMember.getEmail()}</p>
                <p>${teamMember.getSchool()}</p>
            </div>
        </section>
            `;
    }
    else { console.log('Something went wrong run it again to see') }
}

module.exports = tempplateData => {

    return (`
    
        ${generateCards(tempplateData)}
    
    `)
}