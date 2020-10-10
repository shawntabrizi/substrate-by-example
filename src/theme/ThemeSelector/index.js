// Select a theme using the `theme` front matter

import React from 'react';
import OriginalDocItem from "@theme-original/DocItem";
import TwoColDocItem from "../TwoColDocItem"
import CodeViewDocItem from '../CodeViewDocItem';

export default function ThemeSelector(props) {
	const { content: DocContent } = props;
	const { frontMatter: { theme } } = DocContent;

	switch (theme) {
		case "twocol":
			return <TwoColDocItem {...props} />
		case "codeview":
			return <CodeViewDocItem {...props} />
		default:
			return <OriginalDocItem {...props} />
	}
}
