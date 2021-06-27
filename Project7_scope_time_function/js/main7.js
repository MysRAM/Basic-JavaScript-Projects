//scope: global variable/outside functions
var X = 10
function GlobalFunction_1() {
    var result = 20 + X + "<br>";
    document.getElementById("Global_1").innerHTML = "20 + X = " + result;
}
function GlobalFunction_2() {
    var result = X + 100;
    document.getElementById("Global_2").innerHTML = "X + 100 = " + result;
}

//scope: local variable
function LocalFunction_1() {
    var Y = 5;
    var result = Y + 15;
    document.getElementById("Local_1").innerHTML = "15 + Y = " + result;
}
function LocalFunction_2() {
    var Y = 7;
    var result = Y + 100;
    document.getElementById("Local_2").innerHTML = "Y + 100 = " + result;
}

//if statements
if (1 < 2) {
    document.write("The left number is smaller than the number on the right")
}

//Date().getHours() method
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Else Statements
function Age_Function() {
    Age = document.getElementById("Age").value;
    var Vote 
    if (Age >= 18) {
        Vote = "You are old enought to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innterHTML = Vote;
    }

//Else/If statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0 ) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon,";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}