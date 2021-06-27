//scope: global variable/outside functions
var X = 10
function GlobalFunction_1() {
    document.write(20 + X + "<br>");
    document.getElementById("Global_1").innerHTML = "20 + X = " + X;
}
function GlobalFunction_2() {
    document.write(X + 100);
    document.getElementById("Global_2").innerHTML = "X + 100 = ";
}

//scope: local variable
function LocalFunction_1() {
    var X = 10;
    console.log(15 + X);
    document.getElementById("Local_1").innerHTML = "15 + X = " + X;
}
function LocalFunction_2() {
    console.log(X + 100);
    document.getElementById("Local_2").innerHTML = "X + 100";
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