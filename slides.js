"use strict";

const slides = document.querySelectorAll('#slideDeck section');
let currentSlide = 0;


function setSlide(slide_number) {
	let candidate = document.querySelector('#slideDeck section.current');
	if(candidate) {
		candidate.classList.remove('current');
	}
	let mySlide = slides.item(slide_number);
	if(mySlide) {
		mySlide.classList.add('current');
	}
	current.textContent = `${slide_number + 1} of ${slides.length}`;
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
document.addEventListener('keydown', keyHandler);

function prevSlide(ev) {
	currentSlide--;
	if(currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	setSlide(currentSlide);
}
function nextSlide(ev) {
	currentSlide++;
	if(currentSlide >= slides.length) {
		currentSlide = 0;
	}
	setSlide(currentSlide);
}

function keyHandler(ev) {
	console.log(ev.key);
	switch (ev.key) {
		case "ArrowRight":
			nextSlide();
			break;
		case "ArrowLeft":
			prevSlide();
			break;

	}
}


setSlide(currentSlide);
