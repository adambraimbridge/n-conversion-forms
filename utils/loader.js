/**
 * Utility for the `n-conversion-forms/partial/loader.html` partial
 * @example
 * const loader = new Loader(document);
 *
 * loader.show();
 */
class Loader {
	/**
	 * Initalise the Loader utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the loader element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.VISIBLE_CLASS = 'is-visible';
		this.HIDDEN_CLASS = 'n-ui-hide';

		this.element = element;
		this.$loader = element.querySelector('.ncf__loader');
		this.$loaderContent = element.querySelector('.ncf__loader__content');
		this.$loaderContentTitle = element.querySelector('.ncf__loader__content__title');
		this.$loaderContentMain = element.querySelector('.ncf__loader__content__main');

		if (!this.$loader) {
			throw new Error('Please include the loader partial on the page');
		}
	}

	/**
	 * Clear the content.
	 */
	clearContent () {
		this.$loaderContent.innerHTML = '';
	}

	/**
	 * Set the html content.
	 *
	 * @param {string} title The HTML markup/string containing the title of the message.
	 * @param {string} content The HTML markup/string containing the main content of the message.
	 */
	setContent ({ title, content}) {
		if (title) {
			this.$loaderContentTitle.innerHTML = title;
		}
		if (content) {
			this.$loaderContentMain.innerHTML = content;
		}
	}

	/**
	 * Show the loader
	 *
	 * @param {object} content The optional content to set *before* showing the loader.
	 */
	show (content) {
		if (content) {
			this.setContent(content);
		}
		this.$loader.classList.add(this.VISIBLE_CLASS);
		this.$loader.classList.remove(this.HIDDEN_CLASS);
	}

	/**
	 * Hide the loader
	 */
	hide () {
		this.$loader.classList.add(this.HIDDEN_CLASS);
		this.$loader.classList.remove(this.VISIBLE_CLASS);
	}
};

module.exports = Loader;
