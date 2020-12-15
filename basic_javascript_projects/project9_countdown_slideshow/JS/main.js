function countdown() {  // countdown with input
    var seconds=document.getElementById("seconds").value;

    function tick() {
        seconds=seconds-1;
        timer.innerHTML=seconds;  // this is interesting. You can grab the id without using the getelementbyid method
        setTimeout(tick, 1000);
        if (seconds == 0) {
            alert("Time's Up");
        }
    }
    tick();
}

var slideIndex=1;  //initial variable assignment and function call
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); //used in the html to increment or decrement the slide number
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex=n);  //when you click on the dots it takes you to that slide
}

function showSlides(n) {
    var i;
    var slides= document.getElementsByClassName("mySlides");  //getting an array of the slides
    var dots=document.getElementsByClassName("dot");  // getting an array of the dots
    if (n > slides.length) {slideIndex=1} //this takes you back to the beginning once you get to the end
    if (n < 1) {slideIndex=slides.length}  //This takes you back to the end when you get to the beginning
    for (i=0; i<slides.length; i++) {  //This changes the display to "none"
        slides[i].style.display="none";
    }
    for (i=0; i<dots.length; i++) { // changes any dot class that says "active" to an empty string ""
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display="block"; // these two change the display of the slide and the class name of the dots for the active slide
    dots[slideIndex-1].className += " active";
}