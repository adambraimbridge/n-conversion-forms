const OForms = require('o-forms');

class Validation {

	/**
	 * Set up the Validation utility
	 * @param {Boolean} mutePromptBeforeLeaving (default: false) Whether to prompt the user before leaving if there have been changes in any of the fields.
	 */
	constructor ({ mutePromptBeforeLeaving } = {}) {
		this.$form = document.querySelector('form.ncf');
		this.oForms = new OForms(this.$form);
		this.$formFields = this.oForms.findInputs().filter($el => $el.type !== 'hidden');
		this.$requiredEls = this.$formFields.filter($el => $el.required);
		this.formValid = false;
		this.formChanged = false;
		this.formSubmit = false;
		this.mutePromptBeforeLeaving = mutePromptBeforeLeaving || false;
	}

	/**
	 * Initalise
	 */
	init () {
		if (!this.$form.length) return;

		for (const $el of this.$requiredEls) {
			if (/(checkbox)/gi.test($el.type)) {
				$el.addEventListener('change', this.checkElementValidity.bind(this, $el), false);
			} else {
				$el.addEventListener('blur', this.checkFormValidity.bind(this), false);
			}
		}

		this.$form.addEventListener('change', () => {
			this.formChanged = true;
		});

		this.$form.addEventListener('submit', () => {
			this.formSubmit = true;
		});

		if (!this.mutePromptBeforeLeaving) {
			window.onbeforeunload = () => {
				// Prompt the user about leaving in case they have changes they might lose.
				return this.formChanged && !this.formSubmit || null;
			};
		}

		this.checkFormValidity();
	}

	/**
	 * Proxy method for oForms validateForm
	 * @param {Event} event DOM event
	 */
	validateForm (event) {
		this.oForms.validateForm(event);
	}

	/**
	 * Checks a single elements validity.
	 */
	checkElementValidity ($el) {
		// Make sure the input element has been updated (for example if this is from a label click for a checkbox).
		this.oForms.validateInput($el);
	}

	/**
	 * Update the state of the form to reflect form validity.
	 */
	checkFormValidity () {
		if (this.getInvalidEls().length === 0) {
			this.formValid = true;
		} else {
			this.formValid = false;
		}
	}

	/**
	 * Return the invalid fields on the form.
	 * @returns {DOMElements} The array-like containing the invalid form elements.
	 */
	getInvalidEls () {
		return this.$requiredEls.filter($el => !$el.checkValidity());
	}

}

module.exports = Validation;
