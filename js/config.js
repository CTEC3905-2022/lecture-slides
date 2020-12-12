doSkipHello = JSON.parse(localStorage['skipHello']);
console.log(!!doSkipHello);
skipHello.checked = doSkipHello;

window.addEventListener('storage', ev => {
	console.log(ev);
});

if(!doSkipHello) {
	config.classList.add('active');
}

dismiss.addEventListener('click', ev => {
	config.classList.remove('active');
	localStorage['skipHello'] = JSON.stringify(skipHello.checked);
});

configToggler.addEventListener('click', ev => {
	config.classList.toggle('active');
});
