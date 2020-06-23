'use strict';

const expressHandlebars = require('express-handlebars');
const handlebars = require('handlebars');

const helpers = {
	ifEquals: function (a, b, options) {
		if (a === b) {
			return options.fn(this);
		}
		return options.inverse(this);
	},
	ifSome: function () {
		const args = [].slice.call(arguments);
		const opts = args.pop();

		return args.some(function (arg) {
			return arg;
		}) ? opts.fn(this) : opts.inverse(this) ;
	}
};

const extendedHelperHandlebars = function () {
	const Handlebars = handlebars;
	Handlebars.registerHelper(helpers);
	// Handlebars.registerHelper({ helpers, ...options.helpers });
	return Handlebars;
};

const expressHbs = function (options) {
	if (!options || !options.directory) {
		throw 'nextifyHandlebars requires an options object containing a directory property';
	}

	const configuredHbs = extendedHelperHandlebars();
	const expressHandlebarsInstance = new expressHandlebars.create({ // eslint-disable-line
		// use a handlebars instance we have direct access to so we can expose partials
		handlebars: configuredHbs,
		extname: options.extname || '.html',
		helpers: helpers,
		defaultLayout: options.defaultLayout || false,
		layoutsDir: options.layoutsDir || undefined,
		partialsDir: options.partialsDir
	});

	return expressHandlebarsInstance.getPartials()
		.then(function (partials) {
			configuredHbs.partials = partials;

			return expressHandlebarsInstance;
		});
};

const applyToExpress = function (app, options) {
	if (!app) {
		throw 'applyToExpress requires an instance of an express app';
	}

	return expressHbs(options)
		.then(function (expressHandlebarsInstance) {
			app.set('views', options.directory + (options.viewsDirectory || '/views'));

			app.engine((options.extname || '.html'), expressHandlebarsInstance.engine);

			app.set('view engine', (options.extname || '.html'));

			return expressHandlebarsInstance;
		});
};

module.exports = applyToExpress;
module.exports.handlebars = extendedHelperHandlebars;
module.exports.standalone = expressHbs;
