const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

let findInputsStub = sinon.stub();
let validateInputStub = sinon.stub();
let OFormsStub = sinon.stub().returns({
	findInputs: findInputsStub,
	validateInput: validateInputStub
});

const Validation = proxyquire('../../utils/validation', {
	'o-forms': OFormsStub
});

global.document = {};
global.window = {};

describe('Validation', () => {
	let document;
	let formElement;
	let requiredElListener;
	let checkboxAddEventListener;
	let sandbox;
	let checkValidityStub;
	let validation;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		checkboxAddEventListener = sandbox.stub();
		formElement = {
			length: 1,
			addEventListener: () => {},
			querySelector: () => {}
		};
		global.document.querySelector = () => formElement;
		requiredElListener = sandbox.stub();
		checkValidityStub = sandbox.stub();
		sandbox.spy(formElement, 'addEventListener');
		sandbox.spy(OFormsStub, 'constructor');
		findInputsStub.returns([
			{ name: 'foo', type: 'hidden' },
			{ name: 'bar' },
			{ name: 'baz', required: true, addEventListener: requiredElListener, checkValidity: checkValidityStub },
			{ name: 'qoo', required: true, addEventListener: requiredElListener, checkValidity: checkValidityStub },
			{ name: 'checkbox', type: 'checkbox', addEventListener: checkboxAddEventListener, required: true, checkValidity: checkValidityStub }
		]);

		validation = new Validation(document);
		validation.init();
	});

	afterEach(() => {
		delete global.window.onbeforeunload;
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should call oForms to setup client side validation', () => {
			expect(OFormsStub.calledWithNew()).to.be.true;
		});

		it('should have a $form property exposing the form element', () => {
			expect(validation.$form).to.deep.eq(formElement);
		});

		it('should check validation status on init', () => {
			expect(checkValidityStub.called).to.be.true;
		});
	});

	describe('init', () => {
		it('should add an event listener to all required elements', () => {
			expect(requiredElListener.calledTwice).to.be.true;
		});

		it('should bind to onbeforeunload by default', () => {
			expect(global.window.onbeforeunload).to.exist;
			expect(typeof global.window.onbeforeunload).to.equal('function');
		});

		it('should not bind to onbeforeunload if mutePromptBeforeLeaving = true', () => {
			delete global.window.onbeforeunload;
			const validation2 = new Validation({ mutePromptBeforeLeaving: true });
			validation2.init();

			expect(global.window.onbeforeunload).to.be.undefined;
		});

		it('should call checkElementValidity when changing a checkbox', () => {
			expect(checkboxAddEventListener.getCalls().length).to.equal(1);
			// we have to check `bound ` because we pass it with `.bind(this)`
			expect(checkboxAddEventListener.getCall(0).args[1].name).to.equal('bound checkElementValidity');
		});
	});

	describe('onbeforeunload', () => {
		it('should return null by default', () => {
			expect(global.window.onbeforeunload()).to.be.null;
		});

		it('should return true if the form has changed', () => {
			validation.formChanged = true;

			expect(global.window.onbeforeunload()).to.be.true;
		});
	});

	describe('checkElementValidity', () => {
		it('should call oForms.validateInput for the element.', () => {
			const $el = { foo: true };
			validation.checkElementValidity($el);

			expect(validateInputStub.getCall(0).args[0]).to.equal($el);
		});
	});

	describe('checkFormValidity', () => {
		it('should set the form as invalid if there are invalid elements.', () => {
			validation.formValid = true;

			checkValidityStub.returns(false);
			validation.checkFormValidity();

			expect(validation.formValid).to.be.false;
		});

		it('should set the form as valid if there are invalid elements.', () => {
			validation.formValid = false;

			checkValidityStub.returns(true);
			validation.checkFormValidity();

			expect(validation.formValid).to.be.true;
		});
	});

});
