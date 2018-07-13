var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function addDeletetoList(){

	for(var i =0; i<li.length; i++){
			var button = addDeleteButton();
		li[i].appendChild(button);
		console.log(li[i]);
	}
}
function inputLength() {
	return input.value.length;
}
function addDeleteButton(){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete!"));
	button.onclick=removeItem;
	return button;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = addDeleteButton();
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
addDeletetoList();
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function removeItem(event){
	event.target.parentNode.remove();
}


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");

function setGradient(){
	console.log("color2"+color2.value);
	console.log("color1"+color1.value);

	body.style.background ="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent= body.style.background+";";
}
function setGradientForButton(){
	console.log("color2"+button2.value);
	console.log("color1"+button1.value);

	body.style.background ="linear-gradient(to right, "+button1.value+", "+button2.value+")";
	css.textContent= body.style.background+";";
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setColorButton1(){
	button1.value=getRandomColor();
	setGradientForButton();
}
function setColorButton2(){
	button2.value=getRandomColor();
	setGradientForButton();

}
setGradient();
color2.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient);

button1.addEventListener("click", setColorButton1);
button2.addEventListener("click", setColorButton2);


