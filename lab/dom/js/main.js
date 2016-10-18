"use strict";

var boxOne = document.getElementById('one'),
	boxTwo = document.getElementById('two'),
	boxThree = document.getElementById('three'),
	boxFour = document.getElementById('four'),
	boxFive = document.getElementById('five'),
	boxSix = document.getElementById('six');

boxOne.addEventListener("click", fadeToBlack);

function fadeToBlack() {
	boxOne.classList.add("fade-to-black");
	boxOne.classList.remove();
}



	