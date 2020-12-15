function full_sentence() {  // concat() method for concatenating strings
    var st_1="... And ",
        st_2="we can ",
        st_3="go for ",
        st_4="my thing!";
    var full_sentence=st_1.concat(st_2, st_3, st_4);
    document.getElementById("concatenate").innerHTML=full_sentence;
}
 
function slice_method() {   // slice() method for slicing strings (in javascript strings are 0 indexed arrays like python.)
    var st_1="I love cats - Lucy";
    var sliced_1=st_1.slice(0,7);
    var sliced_2=st_1.slice(14,18)
    document.getElementById("extracted").innerHTML=sliced_1+sliced_2;
}

function up() {  //.toUpperCase() method, makes everything uppercase
    var st_1="i like apples"
    document.getElementById("change").innerHTML=st_1.toUpperCase()
}

function s() {  // .search() method, returns the index of the first letter of the item you are searching for. if no return, it gives -1
    var st_1="Bears like to eat berries and honey"
    var i = st_1.search("berries")
    document.getElementById("search").innerHTML=i
}

function to_string() {  //.toString() method for converting numbers to strings
    var num=1004;
    var num_str=num.toString()
    document.getElementById("str").innerHTML=num_str+" is datatype: "+(typeof num_str)
}

function precision() {  //toPrecision() method for converting a number to a precise amount of digits. if you do three in this example it gives a 1.03e^7 or something like that
    var num=1034592.5832847594;
    document.getElementById("precision").innerHTML=num.toPrecision(7)
}

function fixed() {  // cuts the number at a certain decimal amount then converts it to a string
    var num=3.1415926535897932384626433;
    var fixed_num=num.toFixed(4);
    document.getElementById("fixed").innerHTML="Our number fixed at 4 decimals is "+fixed_num+" and the datatype is: "+(typeof fixed_num);
}

function v() {  //Returns the primitive value of the variable. does NOT change the datatype
    var num=255
    var num_val=num.valueOf()
    document.getElementById("val").innerHTML="the value of our number is "+num_val+" and the datatype is: "+(typeof num_val);
}