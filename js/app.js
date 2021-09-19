var ele = document.body.querySelector(".box");
var eleAnswer = document.body.querySelector(".answer");

var question =prompt("What animal do I want?");

// This is the conditional of my program

if(question=="Seal"||question=="SEAL"||question=="seal"){
    ele.innerHTML="You got the right animal, which was a seal!";
}else if(question=="Monkey"||question=="MONKEY"||question=="monkey"){
    ele.innerHTML = "You got the right animal, which was a monkey!";
}else{
    ele.innerHTML="Sorry the animal was a cute cuddly seal or a monkey!";
}

var qTwo=(prompt("What is the first number?"));
var qThree=(prompt("What is the second number?"));

if(qTwo>3&&qThree<10){
    eleAnswer.innerHTML = "The numbers are good.";
}else{
    eleAnswer.innerHTML="The numbers are bad.";
}