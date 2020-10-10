module.exports = function (context, options) {
	return {
		name: 'docusaurus-plugin-polkadot-js',
		injectHtmlTags() {
			return {
				headTags: [],
				preBodyTags: [
					{
						tagName: 'script',
						attributes: {
							charset: 'utf-8',
							src: '//unpkg.com/polkadot-js-bundle/polkadot.js',
						},
					},
				],
				postBodyTags: [],
			};
		},
	};
};
