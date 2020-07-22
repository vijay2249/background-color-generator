var num1 = Math.floor(Math.random()*255);
var num2 = Math.floor(Math.random()*255);
var num3 = Math.floor(Math.random()*255);
var num4 = Math.floor(Math.random()*255);
var num5 = Math.floor(Math.random()*255);
var num6 = Math.floor(Math.random()*255);

var css = document.querySelector("h3");
var body = document.getElementById("gradient");

body.style.background = "linear-gradient(to right,"
+"rgb"+"("+num1+","+num2+","+num3+")"+","
+"rgb"+"("+num4+","+num5+","+num6+")";

css.textContent = body.style.background+";";

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setgradient(){
// 	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
// 	css.textContent = body.style.background+ ";";
// }

// color1.addEventListener("input",setgradient);
// color2.addEventListener("input",setgradient);