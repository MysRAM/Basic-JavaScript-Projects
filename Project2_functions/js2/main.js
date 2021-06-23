//fuction that changes text when clicked --
function changeText(){
    var sentence = "You clicked here!";
    sentence += "and you won!"
    document.getElementById('mytext').innerHTML = sentence;
}

//myFunction Code: Gets message when clicked --
function myFunction() {
	var demo = document.getElementById("demo");
    console.log(demo.innerHTML);
    demo.innerHTML= "YOU ARE A WINNER!";
}