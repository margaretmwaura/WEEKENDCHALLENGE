
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
            var age =   s.age;
            console.log("The data broken down : " + fname + " " + lname + " " + age);

            var tr = document.createElement('TR');
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(fname));
            tr.appendChild(td);
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(lname));
            tr.appendChild(td)
            var td = document.createElement('TD');
            td.appendChild(document.createTextNode(age));
            tr.appendChild(td);
            tableBody.appendChild(tr);
        }

        var x = document.getElementById("booksdata").rows.length;
        console.log("This is the number of rows : " + x);

        return x;

    };





