class Employee  {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;   
    
    }

    getName() {
        return this.name;
    }

    getEmail() {
    
        return this.email;
    }
    getId() {
        return this.id;
    }

    getRole(){
        return "Employee"
    }
}
//exporting Employee class 
module.exports = Employee; 





