
window.actions = window.actions || {};

(function() {
    var validate = function() {

        let fname =  window.document.getElementById('fname').value;
       console.log("The FistName is : " + fname);
       if(fname)
       {
           console.log("The firstname is not null");
           alert( "This is the first name entered " + fname);
       }
       else
       {
           window.document.getElementById('msgfname').innerHTML = "Write a first proper name";
       }

        let lname =  window.document.getElementById('lname').value;
        console.log("The lastname is : " + lname);
        if(lname)
        {
            console.log("The lastname is not null");
            alert("This is the last name entered " + lname);
        }
        else
        {
            window.document.getElementById('msglname').innerHTML = "Write a last proper name";
        }


        let subject =  window.document.getElementById('ssubject').value;
        console.log("The subject is : " + subject);
        if(subject)
        {
            console.log("The age is not null");
            alert("This is the subject entered " + subject);
        }
        else
        {
            window.document.getElementById('mssubject').innerHTML = "Write a proper subject";
        }

        let sclass =  window.document.getElementById('sclass').value;
        console.log("The class is : " + sclass);
        if(sclass)
        {
            console.log("The age is not null");
            alert("This is the class entered " + sclass);
        }
        else
        {
            window.document.getElementById('msclass').innerHTML = "Write a proper class";
        }

        let stime =  window.document.getElementById('stime').value;
        console.log("The time is : " + stime);
        if(stime)
        {
            console.log("The age is not null");
            alert("This is the time entered is " + stime);
        }
        else
        {
            window.document.getElementById('mstime').innerHTML = "Write a proper time";
        }

    };

    window.actions.init = function() {

        document.getElementById("formdata").addEventListener('submit', validate );

    };
})();
