var x=0;  // global variable assignment
function number_1() {
    var y=100;  // Local variable assignment
    document.getElementById("one").innerHTML=increment();
    function increment() {
        x +=1; //Global variable reference
        return x;
    }
}

function number_2() {
    document.getElementById("two").innerHTML=decrement_try()
    function decrement_try() {
        y -=1; // local variable reference
        return y;
    }
}

function number_3() {
    document.getElementById("one").innerHTML=decrement() // experimenting with referencing the same id element as number_1
    function decrement() {
        x -=1;  
        return x;
    }
}

function date() {  //first if statement
    if (new Date().getHours() < 12) {
        document.getElementById("date").innerHTML="Good morning!";
    } 
}

function personal_if() { // my own
    var time = document.getElementById("time").value;
    if (time < 12) {
        var greeting="Good Morning!"
    }
    else {
        var greeting="Good Afternoon!"
    }
    document.getElementById("personal_if").innerHTML=greeting;
}

function weight_function() {  // basically same as above
    var weight = document.getElementById("weight").value;
        response = ""
    if (weight <= 300) {
        response="You are doing just fine!"
    }
    else {
        response="You should probably go on a diet"
    }
    document.getElementById("weight_response").innerHTML=response
}

function time_function() {  // using else if
    var time=new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "Good morning!";
    }
    else if (time > 12 == time < 18) {
        reply = "Good afternoon!";
    }
    else {
        reply = "Good evening!"
    }
    document.getElementById("time_of_day").innerHTML=reply;
}