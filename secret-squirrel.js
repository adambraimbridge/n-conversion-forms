module.exports = {
	files: {
		allow: [],
		allowOverrides: []
	},
	strings: {
		deny: [],
		denyOverrides: [
			'test@example\\.com', // demos/data.json:90, tests/partials/confirmation.spec.js:12
			'd19dc7a6-c33b-4931-9a7e-4a74674da29a' // components/licence-confirmation.spec.js:44
		]
	}
};
