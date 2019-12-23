module.exports = class Student
{
    constructor(fname , lname , sage) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = sage;
    }

    display() {
        console.log(this.firstname + " " + this.lastname + " " + this.age);
    }
};
