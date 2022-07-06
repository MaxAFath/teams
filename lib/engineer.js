const employee = require('./employee');
class Engineer extends employee{
    constructor(name, email, id, github){
        super(name, email, id)
        this.github = github;
    }
    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports=Engineer;