//concat()method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML + whole_sentence;
}

//Slice() Method
function slice_Method() {
    var Sentence = "All work and no play mades Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() Method
function upperCase() {
    var string = "Hello World!";
    var result = string.upperCase();
    document.getElementById("toUpperCase").innerHTML = result

//Search() Method
function SearchMethod() {
    var str = "Vist The Tech Academy for bootcamp information";
    var result = str.search(bootcamp);
    document.getElementById("Method").innerHTML = result;

//number Methods
function string_Method() {
    var X = 182
    document.getElementById("Numbers_to_string").innerHTML = X.toString();

//toPrecision() Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);

//toFixed() Method
function anotherMethod() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;

//valueOf() Method
    function valuable() {
        var str = "Hello World!";
        var res = str.valueOf();
        document.getElementById("valuable").innerHTML = res;
        