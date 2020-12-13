var favorites = {  //Dictionary definition
    football:"Denver Broncos",
    hockey:"Aves",
    food:"Mozzarella di Bufala",
    language:"Italian",
}

 

function my_food() {  //function to call an element
    delete favorites.hockey;  //delete hockey, because The aves are actually the only team I know
    document.getElementById("dictionary").innerHTML="My favorite hockey team is " + favorites.hockey; //checking to make sure it was deleted
}