//coercion -coverts to its choosing
document.write("10" + 5);


//document.write() method

//operator type 

//js NaN, Infinity, -Infinity--
function myFunction() {
    document.getElementById("test").innerHTML = 0/0;
}

//is it a NaN function--
//true
document.getElementById("test").innerHTML = isNaN('This is a string');
//false
document.getElementById("test").innerHTML = isNaN('007');

//infinity
document.write(2E310);

//-Infinity
document.write(-3E310);

//boolean
//true
document.write(10>2);
//false
document.write(10<2);

//console.log() function--
console.log(2 + 2);

//Comparison
//true
document.write(10 == 10);
//false
document.write(3 == 11);

//equal in value AND type--
//true
X = 10;
Y = 10;
document.write(X === Y);
//false
X = 82
Y = "82"
document.write(X === Y);

//Logical Operators
//AND: &&
//True
document.write (5 > 2 && 10> 4);
//false
document.write (5 > 10 && 10 > 4);

//OR: ||
//true
document.write (5 > 10 || 10 > 4);
//false
document.write (5 > 10 || 10 > 20);

//NOT: !
//js --RETURNS FALSE
function notFunction() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}
//js --RETURNS TRUE
function trueFunction() {
    document.getElementById("Nottrue").innerHTML = ! (5 > 10);
}