var removeFooter = document.querySelector(".footer");
var tempcf = document.querySelector("#celcius").innerText;
var temp1 = document.querySelector("#temp1").innerText;
var temp2 = document.querySelector("#temp2").innerText;
var temp3 = document.querySelector("#temp3").innerText;
var temp4 = document.querySelector("#temp4").innerText;
var temp5 = document.querySelector("#temp5").innerText;
var temp6 = document.querySelector("#temp6").innerText;
var temp7 = document.querySelector("#temp7").innerText;
var temp8 = document.querySelector("#temp8").innerText;
var changer = document.querySelector("#changer").value

function remove() {
    removeFooter.remove()
}

function temperature() {
    if(document.querySelector("#changer").value == "celcius") {
        temp1 = 24 + "\u00B0"
        temp2 = 18 + "\u00B0"
        temp3 = 27 + "\u00B0"
        temp4 = 19 + "\u00B0"
        temp5 = 21 + "\u00B0"
        temp6 = 16 + "\u00B0"
        temp7 = 26 + "\u00B0"
        temp8 = 21 + "\u00B0"
    }
    else {
        temp1 = 75 + "\u00B0"
        temp2 = 64 + "\u00B0"
        temp3 = 80 + "\u00B0"
        temp4 = 66 + "\u00B0"
        temp5 = 69 + "\u00B0"
        temp6 = 60 + "\u00B0"
        temp7 = 78 + "\u00B0"
        temp8 = 69 + "\u00B0"
    }
    document.querySelector("#temp1").innerText = temp1;
    document.querySelector("#temp2").innerText = temp2;
    document.querySelector("#temp3").innerText = temp3;
    document.querySelector("#temp4").innerText = temp4;
    document.querySelector("#temp5").innerText = temp5;
    document.querySelector("#temp6").innerText = temp6;
    document.querySelector("#temp7").innerText = temp7;
    document.querySelector("#temp8").innerText = temp8;
}