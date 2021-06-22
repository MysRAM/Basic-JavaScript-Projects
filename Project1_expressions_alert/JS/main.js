//window alert method--
window.alert("Hello, world!");
alert("Hello World!")

//document.wrtie() method--
document.open("Hello, world!");

//assign variable--
var A = "This is a string"
document.write(A);

//strings--
document.write (Lisa told Bart, "Knock it off, Bart! Or I'll tell dad!/"<br>
    /"Eat my shorts!/" Bart responded.");

//Concatenating String--
document.write("/ "Be who you are and say what you feel," 
    + " because those who mind don/'t matter and those who matter don/'t mind./""
    + "-Dr. Seuss");

//Concatenating String Value to variable
var B = "Concatenated" + "String"
document.write(B)

//multiple variables
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro";
document.write(Dad)

//Str.FontColor() Method--
var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

//fuction--
function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById(Green_Text").innerHTML = result;
}