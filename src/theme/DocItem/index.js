// Add utterances comments at the bottom of `DocItem`.

import React, { useEffect } from 'react';
import ThemeSelector from "../ThemeSelector";

export default function CustomDocItem(props) {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = "https://utteranc.es/client.js";
		script.setAttribute('repo', "shawntabrizi/substrate-by-example");
		script.setAttribute('issue-term', "pathname");
		script.setAttribute('label', "comment");
		script.setAttribute('theme', "preferred-color-scheme");
		script.crossOrigin = "anonymous";
		script.async = true;

		document.getElementById("comment-system").appendChild(script);
	}, []);

	return (
		<>
			<ThemeSelector {...props} />
			<div id="comment-system"></div>
		</>
	);
}
