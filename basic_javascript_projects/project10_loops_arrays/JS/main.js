// using a while loop
function call_loop() {
    var goal=0,
        counter=10,
        count_down="";
    while (counter>goal) {
        count_down += "<br>"+counter;
        counter--;
        if (counter==0) {
            count_down += "<br>" + "Blast Off!!"
        }
    }
    
    document.getElementById("loop").innerHTML=count_down
}

// using the length method
function length_function() {
    var s=document.getElementById("len").innerHTML;
    document.getElementById("total").innerHTML=s.length;
}

// creating an array of instruments. using a for loop to iterate through them and print them out
var instruments=["sackbut", "ophicleide", "krum horn", "double bell euphonium", "Sub Contrabass Trumpet", "Water Organ"];
var i,
    content = "";
function for_loop(){
    for (i=0; i<instruments.length;i++) {
        content += instruments[i]+"<br>";
    }
    document.getElementById("list_of_instruments").innerHTML=content;
}

var instrument,    // testing out a for of loop. does the same thing as above (more similar to python)
    content_1="";
function for_of_loop() {
    for (instrument of instruments) {
        content_1 += instrument+"<br>";
    }
    document.getElementById("of_list").innerHTML=content_1;
}

function array_function() {    // calling one part of an array
    document.getElementById("array").innerHTML="As a trombone player, you could say I play the "+instruments[0]+"!";
}

// making a constant. Here I made a trombone object
const trombone={bell: "321CF", slide: "T-STDN", tuning_slide: "Rose Brass", valve: "Thayer", leadpipe: "T2 Alessi (silver)"};
function constant_function() {
    document.getElementById("constant").innerHTML="My trombone has a "+trombone.tuning_slide+" tuning slide.";
}
function change_function() {  // you can change a constant, but not reassign it
    trombone.tuning_slide="Yellow Brass";
    trombone.mouthpiece="Greg Black 4GM";
    document.getElementById("constant").innerHTML="My trombone has a "+trombone.tuning_slide+" tuning slide and I play on a "+trombone.mouthpiece+" mouthpiece."
}

// using let assignment
function let_practice() {  
    var x="variable global";
    let y="let globabl";
    var content=""
    content = x+"<br>";
    content += y+"<br>";
    {
        let x="variable x changed with let";
        let y="let y changed";
        content += x+"<br>" + y+"<br>"
    }
    content += x+"<br>";
    content += y+"<br>";
    document.getElementById("let_it_be").innerHTML=content;
}

// using a return statement. multiply connects to re, making this code cleaner
function re() {
    var value1=document.getElementById("value_1").value,
        value2=document.getElementById("value_2").value;
    return value1*value2;
}

function multiply() {
    document.getElementById("product").innerHTML=re();
}

// using let to make a phone object. Also added a method called description (like the display dunder in python). 
let phone = {
    model: "Pixel ",
    company: "Google",
    generation: 2,
    color: "Black ",
    description: function() {
        return "My phone is a "+this.model+this.generation+". It is made by "+this.company+".";
    }
};
document.getElementById("phone_description").innerHTML=phone.description();

//below is using continue and break. There are three sections:
// array of random words, and a loop to write them to the page
const random_words = ["computer", "lotion", "water bottle", "book", "headphones", "mouse", "heater"];
var words = "",
    i;
for (i=0; i<random_words.length; i++) {
    words += random_words[i]+"<br>";
}
document.getElementById("words").innerHTML=words

// function for using break, it prints out each word leading up to the inputted word
function break_word_function() {
    let words="";
    let input_word=document.getElementById("break_word").value;
    for (i=0; i<random_words.length; i++) {
        if (random_words[i]==input_word) {
            words += input_word;
            document.getElementById("break_word_result").innerHTML="Your word was at index: "+i+"<br>Here are the words leading up to it: <br>"+words;
            break
        }
        else {
            words += random_words[i]+"<br>";
        }
    }
}

// function for using continue. it prints out only the inputted word and what index you can find it at in the array
function continue_word_function() {
    let return_statement="";
    let input_word=document.getElementById("continue_word").value;
    for (i=0; i<random_words.length; i++) {
        if (random_words[i]==input_word) {
            return_statement = "Your word '"+input_word+"' was found at index: "+i;
            document.getElementById("continue_word_result").innerHTML=return_statement;
            break;
        }
        else {
            continue;
        }
    }
}

