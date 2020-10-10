// Add utterances comments at the bottom of custom `DocItem` theme.

import React from 'react';
import ThemeSelector from "../ThemeSelector";
import Comment from "../../components/Comments"

export default function CustomDocItem(props) {
	return (
		<>
			<ThemeSelector {...props} />
			<Comment {...props} />
		</>
	);
}
