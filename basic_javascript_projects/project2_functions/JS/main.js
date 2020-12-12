function cats_dogs() {
    document.getElementById("my_text").innerHTML="That's better"; //Changes text inside the element
    document.getElementById("my_img").src="./images/dog.jpg"; // changes the src of the image
}



function con() {
    var string_1="I like";  // variable assignments
        string_1 += " bananas";
    document.getElementById("concatenate").innerHTML=string_1; //assigns the string to the element
}

function to_fahrenheit() {
    var degrees = document.getElementById("celsius").innerHTML;
    var f = (degrees*(9/5))+32;
    var text = "The current temperature is " + f + " degrees Fahrenheit";
    document.getElementById("fahrenheit").innerHTML = text;
}