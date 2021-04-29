const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,role,gitHub){
        super(name,id,email,role);
        this.role = "Engineer";
        this.gitHub = `gitHub.com/${gitHub}`;

    }
    getRole(){
        return "Engineer";

    }
    getGitHub(){
        return this.gitHub
    }
}

module.exports =Engineer;