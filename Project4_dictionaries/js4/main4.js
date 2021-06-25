//KVP: Key-Value Pair Collection



//matching function--
function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("dictionary").innerHTML = Animal.Sound;
}

