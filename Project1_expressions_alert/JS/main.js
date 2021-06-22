window.alert(A);

var A = "This is a string";


document.write("/" Be who you are and say what you feel,"
     + " because those who mind don/'t matter and those who matter don/'t mind./""
     + "-Dr. Seuss");

var B = "Concatenated" + "String"
document.write(B)

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro";
document.write (Dad);

var blues = "I have the blues.";
var bluds = blues.fontcolor("blue");
document.write(blues);

//Expression
Document.write(3+3);

//function
function My_First_Function() {          //Defining a function and naming it
    var str = "This text is green!";    //Defining a variable and giving it a string value
    var result = str.fontcolor("green");//Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;//Putting the value of result 
                                                            //into HTML element with "Green_Text" id
}