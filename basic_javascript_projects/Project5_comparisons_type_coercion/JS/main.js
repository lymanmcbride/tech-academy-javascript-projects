// to find the data type
document.write(typeof "word");
document.write(typeof 45);

// displays NaN
function is_nan() {
    document.getElementById("nan").innerHTML=0/0
}

function check_is_nan() {
    document.getElementById("is_nan").innerHTML=isNaN("Yes!"); // self explanatory
}

function check_no_nan() {
    document.getElementById("no_nan").innerHTML=isNaN(8); 
}

function infinity() {
    document.getElementById("infinity").innerHTML=3E310 // anything above 1.7E320 or something like that is infinity
}

function negative_infinity() {
    document.getElementById("negative_infinity").innerHTML=-4E411
}

// operators are &&(and) ||(or) !(not) ==(equal to) ===(equal in value and type)
function and() {
    document.getElementById("tru").innerHTML=(6<7 && 4>=4);
}
document.write(6<7 && 4>=4);

function equal_to() {
    document.getElementById("equal_to").innerHTML=(5+4 == 10);
}

function or() {
    document.getElementById("fal").innerHTML=(5>6 || 10>100);
}
document.write(5>6 || 10>100);

var x=10+15;
    y="25";
function triple() {
    document.getElementById("triple").innerHTML=x===y;
}

function not() {
    document.getElementById("not").innerHTML=!(4<=4)
}
// prints the result to the console in the browser (dev tools then click console)
console.log(4>6 || 5==6);

// coersion: converts conflicting data types into the same type.
var c = "10"+5;
document.write(c);
document.write(typeof c);

