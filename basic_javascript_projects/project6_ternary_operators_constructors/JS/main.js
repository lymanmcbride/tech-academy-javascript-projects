function ride_function() {  //returns the possibility of riding based on the cm input
    var height, can_ride;
        height=document.getElementById("height").value;
        can_ride=(height<52) ? "You are too short":"You are tall enough";
        document.getElementById("ride").innerHTML=can_ride+" to ride.";
}

function voting_function() {  // Returns whether you can vote or not depending on your age using ternary operator
    var age = document.getElementById("age").value;
        can_vote = (age>=18) ? "Yes! Please register as soon as you can and vote in the next possible election!":"You are not old enough to vote yet, but please stay in the know and let your voice be heard when the time comes!";
    document.getElementById("vote").innerHTML=can_vote;
}

// First JS class: you build them as functions
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "white and black");
var Erik = new vehicle("Ford", "Pinto", 1971, "mustard");
function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a "+ Erik.vehicle_color + "-colored "+ Erik.vehicle_model + " manufactured in " + Erik.vehicle_year;
}
var Lyman = new vehicle("Acura", "TSX", 2004, "Silver");
function lyman_vehicle() {
    document.getElementById("new_and_this").innerHTML="I drive an "+Lyman.vehicle_make+", "+Lyman.vehicle_year+", "+Lyman.vehicle_model+", colored "+Lyman.vehicle_color;
}

// Attempting to assign a reserved word as a variable
// var reserved = in;
// document.write(reserved);

function artwork(title, artist, year, location, medium) { // My own class with constructor
    this.title=title;
    this.artist=artist;
    this.year=year;
    this.current_location=location;
    this.medium=medium;
}

// instance of class and function to write it on the html
var bloch_christ = new artwork("Christ Healing the Sick at Bethesda", "Carl Heinrich Bloch", 1883, "Brigham Young University Museum of Art", "oil on canvas");
function bloch() {
    document.getElementById("bloch_info").innerHTML=bloch_christ.title+", "+bloch_christ.artist+". "+bloch_christ.year+". "+bloch_christ.current_location+". "+bloch_christ.medium+".";
}

// A nested function don't forget you have to define the function and then call it for it to actually work. it won't work just by defining the function. 
function nest() {
    document.getElementById("nested_function").innerHTML=count();
    function count() {
        var start=0;
        function plus_one() {start += 1};
        plus_one();
        plus_one();
        plus_one();
        plus_one();
        plus_one();
        return start;
    }
}