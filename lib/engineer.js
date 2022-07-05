const employee = require('./employee');
class Engineer {
    employee(name, email, id, github){
        super(name, email, id)
        this.github = this.github;
    }
    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports=Engineer;