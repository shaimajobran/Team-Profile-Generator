const Employee =rquire('./Employee');

class Manager extends Employee{
    constructor (name,email,id,role,officeNumber){
        super(name,email,id,role)
        this.officeNumber=officeNumber;
    }
    officeNum(){
        return this.officeNumber
    }
}
module.exports = Manager;
