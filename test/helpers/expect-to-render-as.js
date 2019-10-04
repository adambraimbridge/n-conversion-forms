import React from 'react';
import ReactDOMServer from 'react-dom/server';
import toDiffableHtml from 'diffable-html';


export const expectToRenderAs = {
	toRenderAs (reactComponent, context, props) {
		// `this.isNot` indicates whether the assertion was inverted with `.not`
		// which needs to be respected, otherwise it fails incorrectly.
		// Render the react component.
		const ReactComponentRendered = ReactDOMServer.renderToStaticMarkup(reactComponent(props));
		// Rendere with the same proprieties but using Handlebars.
		const handlerBarsVersion = context.template(props);
		if (this.isNot) {
			expect(toDiffableHtml(ReactComponentRendered)).notToBe(toDiffableHtml(handlerBarsVersion));
		} else {
			// Compare the 2 rendered version to be sure they match.
			expect(toDiffableHtml(ReactComponentRendered)).toBe(toDiffableHtml(handlerBarsVersion));
		}

		expect(ReactComponentRendered).toMatchSnapshot();
		expect(handlerBarsVersion).toMatchSnapshot();

		// This point is reached when the above assertion was successful.
		// The test should therefore always pass, that means it needs to be
		// `true` when used normally, and `false` when `.not` was used.
		return {
			pass: !this.isNot
		};
	}
};
