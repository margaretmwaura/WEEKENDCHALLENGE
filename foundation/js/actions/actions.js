
window.actions = window.actions || {};

(function() {
    var validate = function() {

        let fname =  window.document.getElementById('fname').value;
       console.log("The FistName is : " + fname);
       if(fname)
       {
           console.log("The firstname is not null");
           alert(fname);
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
            alert(lname);
        }
        else
        {
            window.document.getElementById('msglname').innerHTML = "Write a last proper name";
        }


        let age =  window.document.getElementById('age').value;
        console.log("The age is : " + age);
        if(age)
        {
            console.log("The age is not null");
            alert(age);
        }
        else
        {
            window.document.getElementById('msgage').innerHTML = "Write a proper age";
        }

    };

    window.actions.init = function() {

        document.getElementById("formdata").addEventListener('submit', validate );

    };
})();
