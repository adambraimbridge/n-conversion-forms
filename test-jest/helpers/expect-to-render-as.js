import ReactDOMServer from 'react-dom/server';
import toDiffableHtml from 'diffable-html';

export const expectToRenderAs = {
	toRenderAs(reactComponent, context, props) {
		// Render the React component with props.
		const ReactComponentRendered = ReactDOMServer.renderToStaticMarkup(
			reactComponent(props)
		);
		// Render with the same properties but using Handlebars.
		const handlerBarsVersion = context.template(props);
		// `this.isNot` indicates whether the assertion was inverted with `.not`
		// which needs to be respected, otherwise it fails incorrectly.
		if (this.isNot) {
			expect(toDiffableHtml(ReactComponentRendered)).notToBe(
				toDiffableHtml(handlerBarsVersion)
			);
		} else {
			// Compare the 2 rendered versions to be sure they match and compatibility is preserved.
			expect(toDiffableHtml(ReactComponentRendered)).toBe(
				toDiffableHtml(handlerBarsVersion)
			);
		}

		expect(ReactComponentRendered).toMatchSnapshot();
		expect(handlerBarsVersion).toMatchSnapshot();

		// This point is reached when the above assertions were successful.
		// The test should therefore always pass, that means it needs to be
		// `true` when used normally, and `false` when `.not` was used.
		return {
			pass: !this.isNot,
		};
	},
};
