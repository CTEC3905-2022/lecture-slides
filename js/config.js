showHello.checked = !JSON.parse(localStorage.getItem('skipHello'));
mapOn.checked = JSON.parse(localStorage.getItem('map'));
fullOn.checked = JSON.parse(localStorage.getItem('full'));

window.addEventListener('storage', ev => {
	console.log(ev);
});

dismiss.addEventListener('click', ev => {
	config.classList.remove('active');
	localStorage['skipHello'] = JSON.stringify(!showHello.checked);
	localStorage['full'] = JSON.stringify(fullOn.checked);
	localStorage['map'] = JSON.stringify(mapOn.checked);
});

configToggler.addEventListener('click', ev => {
	config.classList.toggle('active');
});

fullOn.addEventListener('click', ev => {
	setFull(fullOn.checked);
});
mapOn.addEventListener('click', ev => {
	setMap(mapOn.checked);
});


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
	if(showHello.checked) {
		config.classList.add('active');
	}
	if(mapOn.checked) {
		toggleMap();
	}
	if(fullOn.checked) {
		toggleFull();
	}
});
