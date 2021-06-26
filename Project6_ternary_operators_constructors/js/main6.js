//ternary operators
document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");
function RideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//vote ternary
document.write(Bigger =(5 >1) ? "Left number is bigger":"Right number is bigger");
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").nodeValue;
    Can_vote = (Age > 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


//keywords/constructors
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erick drives a " + Erik.Vehicle_Color + Erick.Vehicle_Model + Erik.Vehicle_Year;
}
    
//new/this
function Client(Program, OneonOne , PaymentPlan, Race) {
    this.Client_Program = Program;
    this.Client_OneonOne = OneonOne;
    this.Clent_PaymentPlan = PaymentPlan;
}
var Elisabeth = new Client("InnerSANCTUM", "Yes", "none");
var Lisa = new Client("Consultation", "Yes", "50%");
var Emily = new Client("BackDOOR ShadowWORK", "Yes", "25%/wk");
function myClient() {
    document.getElementById("New_and_This").innerHTML = "Elisabelth is enrolled in " + Elisabeth.Client_Program + " and requires " + Elsiabeth.Client_OneonONe + " a one on one and her chosen payment plan includes payments broken into " + Elisabeth.Client_PaymentPlan + "increments";
}