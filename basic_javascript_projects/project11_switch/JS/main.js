function food_function() {
    var food_output,
        favorite_food = document.getElementById("food_input").value,
        food_string = "Your favorite food is: ";
    switch(favorite_food) {
        case "Artisan Pizza": 
            food_output = food_string + " Artisan Pizza";
        break;
        case "Artisan Cheese": 
            food_output = food_string + " Artisan Cheese";
        break;
        case "Filet Mignon": 
            food_output = food_string + " Filet Mignon";
        break;
        case "Ramen": 
            food_output = food_string + " Ramen";
        break;
        case "Patsy's Cheesy Popcorn": 
            food_output = food_string + " Patsy's Cheesy Popcorn";
        break;
        default:
            food_output = "Please enter one of the above options exactly as written";
    }
    document.getElementById("favorite_food").innerHTML=food_output;
}

function get_class() {
    var class_list = document.getElementsByClassName("change");
    var color=document.getElementById("color").value;
    for (var element of class_list) {
        element.style.color=color;
    }
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "#ccccff");
grd.addColorStop(1, "#ffffcc");
ctx.fillStyle=grd;
ctx.fillRect(0,0,400,150);

ctx.font = "30px Arial";
ctx.strokeText("The Very Hungry", 90, 50);
ctx.font = "50px Arial";
var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop("0", "black");
gradient.addColorStop(".25", "red");
gradient.addColorStop(".5", "green");
gradient.addColorStop(".75", "blue");
gradient.addColorStop("1", "purple"); 
ctx.strokeStyle=gradient;
ctx.strokeText("Caterpillar", 90, 110);