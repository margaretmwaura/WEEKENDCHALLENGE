module.exports = class schedule
{
    constructor(fname , lname , ssubject , sclass , stime) {
        this.firstname = fname;
        this.lastname = lname;
        this.subject = ssubject;
        this.class = sclass;
        this.time = stime;
    }

    display() {
        console.log(this.firstname + " " + this.lastname + " " + this.subject , " " + this.class + " " + this.time);
    }
};
