/* eslint no-console:0 */
const express = require('express');
const jsxTemplate = require('./views/jsx');

const PORT = process.env.PORT || 5005;
const app = express();

app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
	res.send(jsxTemplate({
		title: 'n-conversion-forms-jsx-demo'
	}));
});

app.listen(PORT, () => {
	/* eslint-disable-next-line no-console */
	console.log(`demo server running on port ${PORT}`);
});
