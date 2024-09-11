var submitbtn = document.getElementById("submit");

submitbtn.addEventListener('click', function () {
    var dateElement = document.getElementById("date");
    var monthElement = document.getElementById("month");
    var yearElement = document.getElementById("year");

    var Enteredmonth = parseInt(monthElement.value);
    var Enteredyear = parseInt(yearElement.value);
    var Entereddate = parseInt(dateElement.value);

    if (Entereddate <= 31 && Entereddate > 0 && Enteredmonth <= 12 && Enteredmonth > 0 && Enteredyear > 1000 && Enteredyear > 0) {
        ageCalculator(Entereddate, Enteredmonth, Enteredyear);
    } else {
        console.log("Invalid input. Please check your date of birth.");
    }
});

function ageCalculator(Entereddate, Enteredmonth, Enteredyear) {
    var currentdate = new Date();
    var date = currentdate.getDate();
    var month = currentdate.getMonth() + 1;
    var year = currentdate.getFullYear();

    var yourDate = date - Entereddate;
    var yourMonth = month - Enteredmonth;
    var yourYear = year - Enteredyear;

    if (yourDate < 0) {
        yourMonth--;
        yourDate += 30; // assuming all months have 30 days for simplicity
    }
    if (yourMonth < 0) {
        yourYear--;
        yourMonth += 12;
    }

    var output = document.getElementsByTagName('h1')[0];
    output.innerHTML = "Your current age is " + yourYear + " years, " + yourMonth + " months, and " + yourDate + " days.";
}


