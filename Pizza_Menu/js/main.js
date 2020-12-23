function getReceipt() {
    //initializes the string so it can grow line by line to make a receipt
    var text1="<h3>You Ordered:</h3><p>";
    var runningTotal = 0;
    var sizeTotal=0;
    var sizeArray=document.getElementsByClassName("size");
    for (var i=0; i<sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize=sizeArray[i].value;
            text1+= selectedSize+"</p>";
        }
    }
    // Pizza prices
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    else if (selectedSize === "Mega") {
        sizeTotal = 17;
    }
    runningTotal = sizeTotal;
    //print subtotal to console log
    console.log(selectedSize+" = $"+sizeTotal+".00"); 
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    text1 += "<h3>Added toppings:</h3><p>"
    // adds the toppings to the console log
    for (var j = 0; j< toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 += toppingArray[j].value+"<br>";
        }
    }
    text1 += "</p>"
    //gets the total amount of toppings ordered. 1$ per topping, so the total will just be added to with the length of the selected toppings array
    var toppingCount=selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    }
    else {
        toppingTotal=0;
    }
    runningTotal += toppingTotal;
    //print the rest of the receipt to the console
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    //print the necessary info to the html page
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};