const pattern = /^-----$/m;
const converter = new showdown.Converter();

async function getMD(filename) {
	const response = await fetch(filename);
	return response.text();
}

function buildSlide(mdSlide) {
	const section = document.createElement('section');
	section.innerHTML = converter.makeHtml(mdSlide);
	return section;
}
