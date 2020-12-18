function validateForm() {
    var name=document.forms["contact"]["name"].value;
    var email=document.forms["contact"]["email"].value;
    var message=document.forms["contact"]["message"].value;
    if (name=="") {
        alert("The Name field is required");
        return false
    }
    if (email=="") {
        alert("The email field is required");
        return false
    }
    if (message=="") {
        alert("The message field is required");
        return false
    }
}