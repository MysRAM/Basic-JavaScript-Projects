// Loop link
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++; // ++ is used to increment (add one) 
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//Length property
function stringLength() {
var str = "Hello World!";
var n = str.length;
document.getElementById("Length").innerHTML = n;
}

//For Loops: runs for as long as a condition is true
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Arrays & Objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//Get element by Id
function array_Function() {
    var Books_on_Shelf = [];
    Books_on_Shelf[0] = "Sky Atlas";
    Books_on_Shelf[1] = "The Goddess";
    Books_on_Shelf[2] = "The Subtle Body";
    Books_on_Shelf[3] = "The Sacred Path";
    document.getElementById("Array").innerHTML = "This bookshelf includes the following title" + Books_on_Shelf[3] + ".";
}

//Scope: refers to funcitons, variables & objects you have access to within your program
//Local Scope = accessed only through assigned function & global scope = any function access
//Block Scope = conditional statements & loops {within curly brackets}
function ScopeFunction() {
    var carName = "Corvette";
    document.getElementById("ScopeExample").innerHTML = carName;
}

//Const keyword
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function myconstantFunction() {
    const Tarot_Cards = {type:"Minor Arcana", suit:"Staves", court: "Queen"};
    Tarot_Cards.type = "Minor Arcana";
    Tarot_Cards.suit = "Staves";
    document.getElementById("tarot").innerHTML = "The queen of" + Tarot_Cards.suit + "is apart of the" + Tarot_Cards.type;
}

//Let
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//return statement
function ReturnStatement() {
    return Math.PI;
    document.getElementsById("returnStatement").innerHTML = ReturnStatement();
}

//Objects--questionable
let car = {
return car
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description : ObjectLet() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("ObjectLet").innerHTML = car.description();

//break challenge
function breakFunction() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "the number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}