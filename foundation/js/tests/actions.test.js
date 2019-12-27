
describe("scheduletests" , function ()
{
    describe("form", function() {
        beforeEach(function() {
            var dom = `<div id="dom">
<div id="body" class="grid-frame">
  <form id="formdata">
        <div class="grid-container">
            <div class="grid-y grid-padding-y">
                <div class="cell medium-12 large-12 small-12">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."><span id="msgfname"></span>
                </div>
                <div class="cell medium-12 large-12 small-12">
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."><span id="msglname"></span>
                </div>
               <div class="cell medium-12 large-12 small-12">
                    <label for="ssubject">Subject</label>
                    <input type="text" id="ssubject" name="ssubject" placeholder="Your subject"><span id="mssubject"></span>
                </div>
                <div class="cell medium-12 large-12 small-12">
                    <label for="sclass">Class</label>
                    <input type="text" id="sclass" name="sclass" placeholder="Your class "><span id="msclass"></span>
                </div>
                <div class="cell medium-12 large-12 small-12">
                    <label for="stime">Time</label>
                    <input type="text" id="stime" name="stime" placeholder="Your preffered time"><span id="mstime"></span>
                </div>    
                <div class="cell medium-12 large-12 small-12">
                    <input type="submit" value="Submit" id="submit">
                </div>
            </div>
        </div>
    </form>

</div>
</div>`;

            document.body.insertAdjacentHTML(
                'afterbegin',
                dom);
        });
        beforeEach(function() {
            window.actions.init();
        });
        //Testing the fname input item
        it("should have an error message",function ()
        {
            window.document.getElementById("formdata").onsubmit;
            let fname =  window.document.getElementById('fname').value;
            console.log("The FistName is : " + fname);
            if(fname === " ")
            {
                var text = window.document.getElementById('msgfname').innerHTML;
                console.log(text);
                expect(text).toEqual("Write a first proper name")
            }

        });
        it("an alert should be displayed",function ()
        {
            window.document.getElementById("fname").value = "Maggie";
            spyOn(window, 'alert');
            window.document.getElementById("formdata").onsubmit;
            let fname =  window.document.getElementById('fname').value;
            console.log("The FistName is : " + fname);
            if(fname === "Maggie")
            {
                expect(window.alert)
            }

        });
        //Testing the lastname input
        it("should have an error message for no lastname",function ()
        {
            window.document.getElementById("formdata").onsubmit;
            let lname =  window.document.getElementById('lname').value;
            console.log("The lastname is : " + lname);
            if(lname === " ")
            {
                var text = window.document.getElementById('msglname').innerHTML;
                console.log(text);
                expect(text).toEqual("Write a last proper name")
            }

        });
        it("an alert should be displayed for lastname",function ()
        {
            window.document.getElementById("lname").value = "Wanjiru";
            spyOn(window, 'alert');
            window.document.getElementById("formdata").onsubmit;
            let lname =  window.document.getElementById('lname').value;
            console.log("The lastname is : " + lname);
            if(lname === "Wanjiru")
            {
                expect(window.alert)
            }

        });
        //Testing the subject input
        it("should have an error message for no subject",function ()
        {
            window.document.getElementById("formdata").onsubmit;
            let subject =  window.document.getElementById('ssubject').value;
            console.log("The age is : " + subject);
            if(subject === " ")
            {
                var text = window.document.getElementById('mssubject').innerHTML;
                console.log(text);
                expect(text).toEqual("Write a proper subject")
            }

        });
        it("an alert should be displayed for subject",function ()
        {
            window.document.getElementById("ssubject").value = "Maths";
            spyOn(window, 'alert');
            window.document.getElementById("formdata").onsubmit;
            let subject =  window.document.getElementById('ssubject').value;
            console.log("The age is : " + subject);
            if(subject === "Maths")
            {
                expect(window.alert)
            }

        });

        //Testing the class input
        it("should have an error message for no class",function ()
        {
            window.document.getElementById("formdata").onsubmit;
            let sclass =  window.document.getElementById('sclass').value;
            console.log("The age is : " + sclass);
            if(sclass === " ")
            {
                var text = window.document.getElementById('msclass').innerHTML;
                console.log(text);
                expect(text).toEqual("Write a proper class")
            }

        });
        it("an alert should be displayed for class",function ()
        {
            window.document.getElementById("sclass").value = "Two";
            spyOn(window, 'alert');
            window.document.getElementById("formdata").onsubmit;
            let sclass =  window.document.getElementById('sclass').value;
            console.log("The age is : " + sclass);
            if(sclass === "Two")
            {
                expect(window.alert)
            }

        });

        //Testing the time input
        it("should have an error message for no time",function ()
        {
            window.document.getElementById("formdata").onsubmit;
            let stime =  window.document.getElementById('stime').value;
            console.log("The time is : " + stime);
            if(stime === " ")
            {
                var text = window.document.getElementById('msclass').innerHTML;
                console.log(text);
                expect(text).toEqual("Write a proper time")
            }

        });
        it("an alert should be displayed for time",function ()
        {
            window.document.getElementById("stime").value = "Two";
            spyOn(window, 'alert');
            window.document.getElementById("formdata").onsubmit;
            let stime =  window.document.getElementById('stime').value;
            console.log("The time is : " + stime);
            if(stime === "Two")
            {
                expect(window.alert)
            }

        });

    });

    describe("populate", function() {
            beforeEach(function()
            {
            var dom = `<div id="dom">
<div class="grid-frame">
    <div class="grid-container">
<table id="booksdata" border="2">
    <thead>
    <th>Author</th>
    <th>Country</th>
    <th>language</th>
    </thead>
    <tbody>

    </tbody>
</table>

    </div>
</div>
</div>`;

            document.body.insertAdjacentHTML(
                'afterbegin',
                dom);

        });
            // Checking the number of rows created
            it("should have 4 rows",function ()
            {
                console.log("The table test has been run");
                let data = [{
                    firstname: 'Maggie',
                    lastname: 'Mwaura',
                    subject: 'Maths',
                    class: 'two',
                    time: 'four to six' },
                {
                firstname: 'Maggie',
                    lastname: 'Mwaura',
                    subject: 'Maths',
                    class: 'two',
                    time: 'four to six' }]

                ;
                var num = populate(data);
                expect(num).toEqual(3);
            });


    });


});



