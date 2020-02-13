import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DEFAULT_AGE_RESTRICTION = "16";

export function AcceptTerms({
	hasError = false,
	isSignup = false,
	isRegister = false,
	isChecked = false,
	isB2b = false,
	ageRestriction = DEFAULT_AGE_RESTRICTION,
	isEmbedded = false,
	isCorpSignup = false,
	isTrial = false,
	isTransition = false,
	transitionType = null,
	isPrintProduct = false,
	specialTerms = null
}) {
	const divProps = {
		id: "acceptTermsField",
		className: "o-forms-field o-layout-typography ncf__validation-error",
		"data-validate": "required,checked",
		...(isSignup && { "data-trackable": "sign-up-terms" }),
		...(isRegister && { "data-trackable": "register-up-terms" })
	};

	const labelClassName = classNames([
		"o-forms-input",
		"o-forms-input--checkbox",
		{ "o-forms-input--invalid": hasError }
	]);

	const inputProps = {
		id: "termsAcceptance",
		type: "checkbox",
		name: "termsAcceptance",
		value: "true",
		"data-trackable": "field-terms",
		"aria-required": "true",
		required: true,
		...(isChecked && { defaultChecked: true })
	};

	const b2bTerms = isB2b ? (
		<p id="terms-b2b">
			By submitting this form, you indicate your consent to also being
			contacted by Financial Times by email, post, or phone about our
			other products, services or special offers unless you untick this
			box.
		</p>
	) : (
		<p id="terms-default">
			I confirm I am {ageRestriction} years or older and have read and
			agree to the{" "}
			<a
				className="ncf__link--external"
				href="http://help.ft.com/help/legal-privacy/terms-conditions/"
				target={isEmbedded ? "_top" : "_blank"}
				rel="noopener noreferrer"
				data-trackable="terms-and-conditions"
			>
				Terms &amp; Conditions
			</a>
			.
		</p>
	);

	const corpSignupTerms = isCorpSignup && (
		<>
			<li>
				<p>
					Your organisation’s administrator(s) may view basic usage
					and profile data about your account and have the ability to
					set up myFT topic follows on your behalf.
				</p>
			</li>
			<li>
				<p>
					Basic usage and profile data about your account can include;
					for example, your job title and profile information, the
					date you last visited, volume of content consumed, etc.
				</p>
			</li>
			<li>
				<p>
					myFT topics may be selected on your behalf by your company
					administrator or FT representative for you to follow. You
					can unfollow these topics or unsubscribe from the myFT
					digest through the Contact preferences section on myFT.
				</p>
			</li>
			{isTrial && (
				<li>
					<p>
						This trial is to demonstrate the value of a group
						subscription and we’ll contact you during your trial.
					</p>
				</li>
			)}
		</>
	);

	const transitionTerms = isTransition && (
		<>
			<li>
				<p>
					I give consent for my chosen payment method to be charged
					automatically at the end of each subscription term until I
					cancel it by contacting{" "}
					<a
						class="ncf__link--external"
						href="https://help.ft.com/help/contact-us/"
						target="_blank"
						rel="noopener noreferrer"
					>
						customer service through chat, phone or email
					</a>
					.
				</p>
			</li>
			{transitionType === "immediate" ? (
				<li>
					<p>
						By placing my order, my subscription will start
						immediately. Cancellation notice would take effect at
						the end of the subscription period and previously paid
						amounts are non-refundable.
					</p>
				</li>
			) : (
				<li>
					<p>
						By placing my order, I acknowledge that my subscription
						will start on the date given above. Any cancellation
						notice received after that date will take effect at the
						end of my subscription term and previously paid amounts
						are non-refundable.
					</p>
				</li>
			)}
			<li>
				<p>
					Find out more about our cancellation policy in our{" "}
					<a
						class="ncf__link--external"
						href="http://help.ft.com/help/legal-privacy/terms-conditions/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Terms &amp; Conditions
					</a>
					.
				</p>
			</li>
		</>
	);

	const signupTerms = isSignup && (
		<>
			{isPrintProduct ? (
				<>
					<li>
						<p>
							Credit for delivery suspensions is only available
							for hand-delivered subscriptions and is limited to a
							maximum of 24 issues per yearly subscription terms
							(4 issues per yearly FT Weekend subscription term).
						</p>
					</li>
					<li>
						<p>
							Find out more about your delivery start date in our{" "}
							<a
								class="ncf__link--external"
								href="http://help.ft.com/help/legal-privacy/terms-conditions/"
								target="{{#if isEmbedded}}_top{{else}}_blank{{/if}}"
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>
							.
						</p>
					</li>
				</>
			) : (
				<>
					<li>
						<p>
							I give consent for my chosen payment method to be
							charged automatically at the end of each
							subscription term until I cancel it by contacting{" "}
							<a
								class="ncf__link--external"
								href="https://help.ft.com/help/contact-us/"
								target="{{#if isEmbedded}}_top{{else}}_blank{{/if}}"
								rel="noopener noreferrer"
							>
								customer service through chat, phone or email
							</a>
							.
						</p>
					</li>
					<li>
						<p>
							By placing my order, my subscription will start
							immediately. Cancellation notice would take effect
							at the end of the subscription period and previously
							paid amounts are non-refundable.
						</p>
					</li>
					<li>
						<p>
							Find out more about our cancellation policy in our{" "}
							<a
								class="ncf__link--external"
								href="http://help.ft.com/help/legal-privacy/terms-conditions/"
								target="{{#if isEmbedded}}_top{{else}}_blank{{/if}}"
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>
							.
						</p>
					</li>
				</>
			)}

			{specialTerms && (
				<li>
					<p id="terms-special">{{ specialTerms }}</p>
				</li>
			)}
		</>
	);

	return (
		<div {...divProps}>
			<ul class="o-typography-list o-typography-list--unordered">
				{b2bTerms}
				{corpSignupTerms}
				{transitionTerms}
				{signupTerms}
			</ul>
			<label className={labelClassName}>
				<input {...inputProps} />
				<span class="o-forms-input__label">
					I agree to the terms &amp; conditions.
				</span>
				<p class="o-forms-input__error">Please accept our terms &amp; conditions</p>
			</label>
		</div>
	);
}

AcceptTerms.propTypes = {
	hasError: PropTypes.bool,
	isSignup: PropTypes.bool,
	isRegister: PropTypes.bool,
	isChecked: PropTypes.bool,
	isB2b: PropTypes.bool,
	ageRestriction: PropTypes.string,
	isEmbedded: PropTypes.bool,
	isCorpSignup: PropTypes.bool,
	isTrial: PropTypes.bool,
	isTransition: PropTypes.bool,
	transitionType: PropTypes.string,
	isPrintProduct: PropTypes.bool,
	specialTerms: PropTypes.string
};
