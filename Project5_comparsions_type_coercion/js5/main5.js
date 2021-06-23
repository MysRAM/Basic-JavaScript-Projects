//coercion -coverts to its choosing
document.write("10" + 5);


//document.write() method

//operator type 

//html NaN, Infinity, -Infinity--
<script src="Example.js"></script>
<p id="test" onclick="myFunction()">Click here!</p>

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
