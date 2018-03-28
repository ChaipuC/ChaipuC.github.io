function displayInputUnit2(){
    document.getElementById("unitInput2").innerHTML = document.getElementById("Input2").value;
}
function displayOutputUnit2(){
    document.getElementById("unitOutput2").innerHTML = document.getElementById("Output2").value;
}
function timeConvert(){
    var x = document.getElementById("Input2").selectedIndex;
    var y = document.getElementById("Output2").selectedIndex;
    if(x==y){
        sameToSame();
    } else if (x == 0 && y == 1){
        secToMin();
    } else if (x == 0 && y == 2){
        secToHour();
    } else if (x == 0 && y == 3){
        secToDay();
    } else if (x == 1 && y == 0){
        minToSec();
    } else if (x == 1 && y == 2){
        minToHour();
    } else if (x == 1 && y == 3){
        minToDay();
    } else if (x == 2 && y == 0){
        hourToSec();
    } else if (x == 2 && y == 1){
        hourToMin();
    } else if (x == 2 && y == 3){
        hourToDay();
    } else if (x == 3 && y == 0){
        dayToSec();
    } else if (x == 3 && y == 1){
        dayToMin();
    } else if (x == 3 && y == 2){
        dayToHour();
    }
        
}
function sameToSame(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value;
}
function secToMin(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value / 60; 
}
function secToHour(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value / 3600; 
}
function minToSec(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value * 60; 
}
function minToHour(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value / 60; 
}
function hourToSec(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value * 3600; 
}
function hourToMin(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value * 60; 
}
function secToDay(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value / 84000; 
}
function minToDay(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value / 1440; 
}
function hourToDay(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value / 24; 
}
function dayToSec(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value *84000; 
}
function dayToMin(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value *1440; 
}
function dayToHour(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value * 24; 
}
function weightConvert(){
    document.getElementById("outputString").innerHTML = document.getElementById("inputValue").value * 24; 
}