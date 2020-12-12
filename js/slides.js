"use strict";

let queryParams = new URLSearchParams(window.location.search);
let currentSlide = queryParams.has('slide') ? queryParams.get('slide') : 0;
let filename = queryParams.has('file') ? queryParams.get('file') : 'index.md';
let slides;

loadSlides(filename).then(container => {
	hljs.initHighlighting();
	slides = container.querySelectorAll('section');
	slides.item(0).classList.add('current');
	setSlide(parseInt(currentSlide));
	slides.forEach((slide, slide_number) => {
		slide.addEventListener('click', ev => {
			setSlide(slide_number);
		})
	})
});

function setSlide(slide_number) {
	let previous = document.querySelector('#slideDeck section.current');
	let candidate = slides.item(slide_number);
	previous.classList.remove('current');
	candidate.classList.add('current');
	current.textContent = `${slide_number + 1} of ${slides.length}`;
	queryParams.set('slide', slide_number);
	window.history.replaceState({}, "", `${window.location.origin}${window.location.pathname}?${queryParams.toString()}`);
	if(slideDeck.classList.contains('map')) {
		candidate.scrollIntoView(false);
	}
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide(ev) {
	slideDeck.classList.add('backwards');
	currentSlide--;
	if(currentSlide < 0) { currentSlide = slides.length - 1; }
	setSlide(currentSlide);
}
function nextSlide(ev) {
	slideDeck.classList.remove('backwards');
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
		case "f":
			document.body.classList.toggle('clean');
			break;
		case "m":
			slideDeck.classList.toggle('map');
			break;
		case "Enter":
			if(slideDeck.classList.contains('map')) {
				slideDeck.classList.remove('map');
			}
			break;
	}
});

let touchX;
document.addEventListener('touchstart', ev => {
	touchX = ev.touches[0].clientX;
});
document.addEventListener('touchmove', ev => {
	if(touchX) {
		let moveX = touchX - ev.touches[0].clientX;
		if (moveX < -50) {
			prevSlide();
			touchX = null;
		}	else if (moveX > 50) {
			nextSlide();
			touchX = null;
		}
	}
});
