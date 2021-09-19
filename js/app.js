var box = document.body.querySelector(".box");
var answer = document.body.querySelector(".answer");
var an = document.body.querySelector(".an");

var q1 = Number(prompt("Enter a number."));
if(isNaN(q1)){
    box.innerHTML = "Invalid first number." ;
}

var q2 = Number(prompt("Enter a second number."));
if(isNaN(q2)){
    answer.innerHTML = "Invalid second number." ;
}


var q3 = (prompt("Enter an operator (+  -  *  /)."));
if(q3== "+"){
    an.innerHTML = q1 + q2 ;
} else if(q3=="-") {
    an.innerHTML = q1 - q2;
} else if (q3=="*"|| q3=="x" || q3=="X") {
    an.innerHTML = q1 * q2;
} else if(q3=="/") {
    an.innerHTML = q1 / q2;
} else{
    an.innerHTML = "Invalid operator" ;
}

