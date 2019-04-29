const Loader = require('../../utils/loader');
const expect = require('chai').expect;
const sinon = require('sinon');
const sandbox = sinon.createSandbox();

describe('Loader', () => {
	let loader;
	let documentStub;
	let elementStub;
	let addClassStub = sandbox.stub();
	let removeClassStub = sandbox.stub();

	beforeEach(() => {
		elementStub = {
			classList: {
				add: addClassStub,
				remove: removeClassStub
			}
		};
		documentStub = {
			querySelector: sandbox.stub()
		};
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if nothing passed', () => {
			expect(() => {
				new Loader();
			}).to.throw();
		});

		it('should throw an error if loader not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new Loader(documentStub);
			}).to.throw();
		});
	});

	context('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			loader = new Loader(documentStub);
		});

		describe('clearContent', () => {
			it('should clear the content of the partial', () => {
				loader.setContent('<div>Baz</div>');
				loader.clearContent();
				expect(elementStub.innerHTML).to.equal('');
			});
		});

		describe('setContent', () => {
			it('should set the title of the partial', () => {
				loader.setContent({ title: 'Hooray!'});
				expect(elementStub.innerHTML).to.equal('Hooray!');
			});
			it('should set the content of the partial', () => {
				loader.setContent({ content: '<div>Baz</div>'});
				expect(elementStub.innerHTML).to.equal('<div>Baz</div>');
			});
		});

		describe('show', () => {
			it('should show the loader', () => {
				loader.show();
				expect(addClassStub.getCall(0).args[0]).to.equal(loader.VISIBLE_CLASS);
				expect(removeClassStub.getCall(0).args[0]).to.equal(loader.HIDDEN_CLASS);
			});
			it('should call setContent if content is passed', () => {
				const content = { title: 'foo' };
				sandbox.stub(loader, 'setContent');

				loader.show(content);
				expect(loader.setContent.getCall(0).args[0]).to.equal(content);
			});
		});

		describe('hide', () => {
			it('should hide the loader', () => {
				loader.hide();
				expect(addClassStub.getCall(0).args[0]).to.equal(loader.VISIBLE_CLASS);
				expect(removeClassStub.getCall(0).args[0]).to.equal(loader.HIDDEN_CLASS);
			});
		});
	});
});
