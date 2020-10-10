import React, { useEffect } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

function Comments(props) {
	const { isDarkTheme } = useThemeContext();
	const theme = isDarkTheme ? "github-dark" : "github-light";

	useEffect(() => {
		const script = document.createElement('script');

		script.src = "https://utteranc.es/client.js";
		script.setAttribute('repo', "shawntabrizi/substrate-by-example");
		script.setAttribute('issue-term', "pathname");
		script.setAttribute('label', "comment");
		script.setAttribute('theme', theme);
		script.crossOrigin = "anonymous";
		script.async = true;

		document.getElementById("comment-system").appendChild(script);
	}, []);

	return (
		<div id="comment-system"></div>
	);
}

export default Comments;
