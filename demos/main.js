const Loader = require('../utils/loader');

if (document.querySelector('.ncf__loader')) {
	const loader = new Loader(document);
	loader.show();
}

// Make the textarea display all the rows it's given.
const $textarea = document.getElementById('example-code');
$textarea.rows = ($textarea.value.match(/\n/gi).length) + 1;
