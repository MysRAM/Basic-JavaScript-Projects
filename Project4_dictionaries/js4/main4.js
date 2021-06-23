//KVP: Key-Value Pair Collection



//matching function--
functin myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("dictionary").innerHTML + Animal.Sound;
}

//operators - Output String--
document.write(typeof "word");

//operators - Output Number--
document.write(typeof 3);