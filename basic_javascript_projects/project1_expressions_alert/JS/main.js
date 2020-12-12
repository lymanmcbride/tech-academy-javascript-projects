// popup alert
// alert('Hello world');
window.alert('Hello, world!'); //alert method
function click_or_else() {
    window.alert("If you do not click, your computer will self destruct!");
}

// Assign Variable
// var a = "First Variable Assignment";
// multiple variable assignment
var c='I like to eat,'+' eat,'+' eat,'+' eeples and baneenees!', // initial variable assignments
    mom = "Hermione", 
    dad = "jeremiah";

// // // Strings:
// document.write('Hello, World!');
// // special characters: '\'
// document.write('Jeff always says "I love to eat food!" but it\'s not necessarily a good thing!');
// // Concatenate a string
// document.write('I like to eat,'+' eat,'+' eat,'+' eeples and baneenees!');
// // fontcolor method
var yellow=c.fontcolor("yellow");  //changing previously assigned variables' font colors
    blue=mom.fontcolor("blue");    
    green=dad.fontcolor("green");

var number=5; // variables for another expression, this time with integers
    num=6;



// output
document.write(blue+"!! "+c);  //string expression, using a changed font color
document.write(number+num)  //integer expression