function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// ++ is used to increment (add one) 
// HTML code for above
<p id="Counting_to_Ten"></p>
<button onclick="count_To_Ten()">Click here to start</button>