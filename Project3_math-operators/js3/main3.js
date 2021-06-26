
//addition function--
function addition_function() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
}

//subtraction function--
function subtraction_function() {
    var subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5 - 2 = " + subtraction;
}

//multiplication function--
function multiplication() {
    var simple_math = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 " + simple_math;
}

//division function--
function division() {
    var simple_math = 48 / 6;
    document.getElementById("div").innerHTML = "48 / 6 = " + simple_math;
}

//multiply, subtract, add simultaneous function
function more_math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("more").innerHTML="1 plus 2, multiplied by 10,"
    "+ divided in half and then subtracted by 5 equals " + simple_math;
}

//modulus operatior function--
function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("math").innerHTML = "When you divide 25 by 6 you have a "
   " + remainder of: " + simple_math;
}

//unary operator function--
function negation_operator() {
    var x = 10;
    document.getElementById("math").innerHTML = -x;
}

//increment operators--
function increment() {
    var X = 5;
    X++;
    document.write(X);
    document.getElementById("increment").innerHTML = " X " + +1
}


//decrement operators--
function decrement() {
var X = 5.25;
X--;
document.write(X);
document.getElementById("increment").innerHTML = " X " + -1;
}

//random between 0 & 1
window.alert(Math.random());

//random between ___ and ___
window.alert(Math.random() * 100);
