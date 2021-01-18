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
