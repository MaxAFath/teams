const employee = require('./employee');

class Intern extends employee{
    constructor(name, email, id, school){
        super(name, email, id)
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
    
}

module.exports = Intern;