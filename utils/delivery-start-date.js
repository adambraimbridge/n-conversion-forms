const fetchres = require('fetchres');

/**
 * Utility for the `n-conversion-forms/partial/delivery-start-date.html` partial
 * @example
 * const deliveryStartDate = new DeliveryStartDate(document);
 */
class DeliveryStartDate {
	/**
	 * Initalise the DeliveryStartDate utility
	 * @param {Element} element Usually the window.document
	 * @throws If the element not passed
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply the DOM element');
		}

		this.$container = element.querySelector('#deliveryStartDateField .o-forms-input');
		this.$deliveryStartDate = element.querySelector('#deliveryStartDate');
		this.$deliveryStartDateText = element.querySelector('.js-start-date-text');

		if (!this.$deliveryStartDate) {
			throw new Error('Please include the delivery start date partial on the page.');
		}
	}

	/**
	 * Calls the membership service to check the delivery start date
	 * @param {String} url URL of delivery start date checking service
	 * @param {Function} getData A function to allow fetching updated form data from the page.
	 * @returns {boolean} Whether or not the start date is valid.
	 * @throws If there was an error calling the endpoint to check this.
	 */
	async handleDeliveryStartDateChange (url, getData) {
		if (this.$deliveryStartDate.value) {
			try {
				this.$container.classList.remove('o-forms-input--invalid');
				const result = await fetch(url, {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(Object.assign({}, getData(), {
						startDate: this.$deliveryStartDate.value
					}))
				})
					.then(fetchres.json);

				this.$deliveryStartDate.value = result.firstDeliveryDate;
				this.$deliveryStartDateText.innerHTML = result.firstDeliveryDateString;

				return true;
			} catch (error) {
				this.$container.classList.add('o-forms-input--invalid');
				return false;
			}
		}
	};

	/**
	 * Enables the start date field
	 */
	enable () {
		this.$deliveryStartDate.removeAttribute('disabled');
	}

	/**
	 * Disables the start date field
	 */
	disable () {
		this.$deliveryStartDate.setAttribute('disabled', 'true');
	}

};

module.exports = DeliveryStartDate;
