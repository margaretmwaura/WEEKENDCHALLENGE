var Student = require('./student.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 4000;
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let students = [];


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/listfile', (req, res) => {
    res.sendFile(path.join(__dirname + '/list.html'));
});

app.post('/student', (req, res) => {
    const studentdata = req.body;
    const firstname = studentdata.firstname;
    const lastname = studentdata.lastname;
    const age = studentdata.age;
    // Output the book to the console for debugging
    console.log("This is the data collected : " + firstname + " " + lastname + " " + age);

    if(lastname && firstname && age)
    {
        var studentex = new Student(firstname, lastname, age);
        studentex.display();

        students.push(studentex);
        console.log(students);
        // res.send(' A student has been added');
        // res.sendFile(path.join(__dirname + '/list.html'))

        res.redirect('/listfile');
    }
    else
    {
        console.log("Enter all the inputs");
        res.redirect('/listfile');
    }
});

app.get('/list', (req, res) => {

    for(let s of students)
    {
        console.log(s);
    }
    res.json(students);

});
app.use(express.static(__dirname + '/foundation'))


app.listen(port, () => console.log('Hello world app listening on port ${port}!'));
