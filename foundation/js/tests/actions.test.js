
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
                    <label for="age">Age</label>
                    <input type="text" id="age" name="age" placeholder="Your last age in words"><span id="msgage"></span>
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
        //Testing the age input
        it("should have an error message for no age",function ()
        {
            window.document.getElementById("formdata").onsubmit;
            let age =  window.document.getElementById('age').value;
            console.log("The age is : " + age);
            if(age === " ")
            {
                var text = window.document.getElementById('msgage').innerHTML;
                console.log(text);
                expect(text).toEqual("Write a proper age")
            }

        });
        it("an alert should be displayed for age",function ()
        {
            window.document.getElementById("age").value = "Thrirty";
            spyOn(window, 'alert');
            window.document.getElementById("formdata").onsubmit;
            let age =  window.document.getElementById('age').value;
            console.log("The age is : " + age);
            if(lname === "Thrirty")
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
        <h6> This is the list page </h6>
        <p id="student">Will display the list</p>
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
                let data = [ { firstname: 'Maggie', lastname: 'Mwaura', age: 'twenty' }, { firstname: 'Maggie', lastname: 'Mwaura', age: 'thirth' },
                    { firstname: 'Maggie', lastname: 'Mwaura', age: 'thirth' }
                ];
                var num = populate(data);
                expect(num).toEqual(4);
            });


    });


});



