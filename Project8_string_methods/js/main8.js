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

