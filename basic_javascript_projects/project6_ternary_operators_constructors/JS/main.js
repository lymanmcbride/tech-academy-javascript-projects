function ride_function() {  //returns the possibility of riding based on the cm input
    var height, can_ride;
        height=document.getElementById("height").value;
        can_ride=(height<52) ? "You are too short":"You are tall enough";
        document.getElementById("ride").innerHTML=can_ride+" to ride.";
}

function voting_function() {
    var age = document.getElementById("age").value;
        can_vote = (age>=18) ? "Yes! Please register as soon as you can and vote in the next possible election!":"You are not old enough to vote yet, but please stay in the know and let your voice be heard when the time comes!";
    document.getElementById("vote").innerHTML=can_vote;
}