
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
           window.document.getElementById('msgfname').innerHTML = "Write a proper name";
       }

    };

    window.actions.init = function() {

        document.getElementById("formdata").addEventListener('submit', validate );

    };
})();
