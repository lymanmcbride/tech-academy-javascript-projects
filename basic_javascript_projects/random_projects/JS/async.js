document.getElementById("h1").innerHTML="Input the time of day on a 24 hr clock"
function time_of_day() {
    if (time.value<12) {
        document.getElementById("p1").innerHTML="Good Morning"
    } 
    else if (time.value < 17) {
        document.getElementById("p1").innerHTML="Good Afternoon"
    }
    else {
        document.getElementById("p1").innerHTML="Good Evening"
    }
}
