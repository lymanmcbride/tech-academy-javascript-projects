function do_math() {    // originally mixed math, this is now just addition
    var two = 2,
        four = 4;
    var op = (two+four);
    document.getElementById("math").innerHTML="Two plus four is " + op;
}

function subtract() { // self explanatory
    var three = 3;
    var four = 4;
    var op = three-four
    document.getElementById("subtract").innerHTML="three minus four equals " + op;
}

function multiplication() { // self explanatory
    var multiply=3*3;
    document.getElementById("multiplication").innerHTML="Three x Three equals " + multiply;
}

function division() { // self explanatory
    var divide=200/4;
    document.getElementById("division").innerHTML="two hundred divided by four equals " + divide;
}

function math_operations() { // Mixed math
    var operation=((2+3)*24/2)-2000;
    document.getElementById("math_operations").innerHTML="((2+3)*24/2)-2000 equals: " + operation;
}

function modulus() { // self explanatory
    var modulus=15%2;
    document.getElementById("modulus").innerHTML="15%2=" + modulus;
}

function unary() { // a unary operator only has one operand. in this case you make it negative by using a unary operator
    var x=10;
    document.getElementById("unary").innerHTML="negate 10 is " + -x;
}

function increment_5() { // self explanatory
    var x=5;
    x++;
    document.getElementById("increment_5").innerHTML="Five incremented is " + x;
}

function decrement_5() {  // self explanatory
    var x=5;
    x--;
    document.getElementById("decrement").innerHTML="Five decremented is " + x
}

function random() {  // first use of the math object. random method returns a number between 1 and 0. multiplying it gives you a number between 0 and one less than the multiplied by number. Adding to it changes the bottom number
    var x = (Math.random()*25)+10;
    document.getElementById("random").innerHTML="Random Number between 10 and 35: " + x;
}

function power() { // W3 schools has a comprehensive list of methods for this object. There is no constructor
    var x = Math.pow(5, 4);
    document.getElementById("power").innerHTML="5 to the power of 4 is " + x;
}