'use strict';

const Path = require('path');
const expressHandlebars = require('express-handlebars');
const handlebars = require('handlebars');
const loadPartials = require('./load-partials');

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
	return Handlebars;
};

const nextifyHandlebars = function (options) {
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
		layoutsDir: options.layoutsDir || undefined
	});

	const partialsDir = (options.partialsDir || []);
	const dependencyRoot = Path.join(options.directory, '/bower_components/');
	const ignoreListInLinkedDeps = ['.git', 'node_modules', 'bower_components', 'demos'];
	const limitToComponents = (options.limitToComponents || '');

	// look up templates on our own to avoid scanning thousands of files
	return loadPartials(expressHandlebarsInstance, dependencyRoot, partialsDir, ignoreListInLinkedDeps, limitToComponents)
		.then(function (partials) {
			expressHandlebarsInstance.partialsDir = partials;

			// makes the usePartial helper possible
			return expressHandlebarsInstance.getPartials()
				.then(function (partials) {
					configuredHbs.partials = partials;

					return expressHandlebarsInstance;
				});
		});
};

const applyToExpress = function (app, options) {
	if (!app) {
		throw 'applyToExpress requires an instance of an express app';
	}

	return nextifyHandlebars(options)
		.then(function (expressHandlebarsInstance) {
			app.set('views', options.directory + (options.viewsDirectory || '/views'));

			app.engine((options.extname || '.html'), expressHandlebarsInstance.engine);

			app.set('view engine', (options.extname || '.html'));

			return expressHandlebarsInstance;
		});
};

module.exports = applyToExpress;
module.exports.handlebars = extendedHelperHandlebars;
module.exports.standalone = nextifyHandlebars;
