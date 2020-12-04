"use strict";

const slides = document.querySelectorAll('#slideDeck section');
let currentSlide = 0;

function setSlide(slide_number) {
	let previous = document.querySelector('#slideDeck section.current');
	let candidate = slides.item(slide_number);
	previous.classList.remove('current');
	candidate.classList.add('current');
	current.textContent = `${slide_number + 1} of ${slides.length}`;
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(ev) {
	currentSlide--;
	if(currentSlide < 0) { currentSlide = slides.length - 1; }
	setSlide(currentSlide);
}
function nextSlide(ev) {
	currentSlide++;
	if(currentSlide >= slides.length) { currentSlide = 0; }
	setSlide(currentSlide);
}

document.addEventListener('keydown', ev => {
	switch (ev.key) {
		case "ArrowRight":
			nextSlide();
			break;
		case "ArrowLeft":
			prevSlide();
			break;
	}
});


setSlide(currentSlide);
