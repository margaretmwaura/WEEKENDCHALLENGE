
     function populate(res) {

         var table = document.getElementById("booksdata");

         var tableBody = document.createElement('TBODY')
         table.appendChild(tableBody);

         console.log("The function has been claeed");
        var num = res.length;
        console.log("This is the size of the array read : " + num);

        for (var i = 0; i < num; i++)
        {
            var  s = res[i];
            var fname = s.firstname;
            var lname = s.lastname;
            var subject = s.subject;
            var cclass = s.class;
            var time = s.time;
            console.log("The data broken down : " + fname + " " + lname + " " + subject + " " + cclass + " " + time);

            var tr = document.createElement('TR');

            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(fname));
            tr.appendChild(td);

            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(lname));
            tr.appendChild(td);

            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(subject));
            tr.appendChild(td);

            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(cclass));
            tr.appendChild(td);

            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(time));
            tr.appendChild(td);

            tableBody.appendChild(tr);
        }

        var x = document.getElementById("booksdata").rows.length;
        console.log("This is the number of rows : " + x);

        return x;

    };





