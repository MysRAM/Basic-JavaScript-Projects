//creating JavaScript Program
//html
<p>How many seconds would you like to set your alarm for?</p>
<input id="seconds" value="" />
<button onclick="countdown()">Click Here</button>
<p id="timer"></p>

//js
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick,1000);
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}