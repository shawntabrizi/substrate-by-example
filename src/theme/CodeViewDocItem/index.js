// Code view editor layout for a document.

import React, { useState, useEffect, useRef } from 'react';
import OriginalDocItem from "@theme-original/DocItem";
import styles from "./style.module.css"
import Editor from "../../components/Editor"
import useBaseUrl from "@docusaurus/useBaseUrl";

const path = require('path');

export default function CodeViewDocItem(props) {
	const { content: DocContent } = props;
	const { frontMatter: { code } } = DocContent;
	const [codeText, setCodeText] = useState("Loading...");
	const mountedRef = useRef(true)

	const codePath = useBaseUrl(code);

	async function getCode() {
		const response = await fetch(codePath);
		const text = await response.text();

		if (!mountedRef.current) return null

		setCodeText(text);
	}

	useEffect(() => {
		if (code) {
			getCode();
		} else {
			setCodeText("No `code` front matter specified.");
		}
		return () => mountedRef.current = false;
	}, []);

	// Hide the table of contents in the two col layout.
	props.content.frontMatter.hide_table_of_contents = true;

	return (
		<>
			<div className={styles.row}>
				<div className={styles.column}>
					<OriginalDocItem {...props} />
				</div>
				<div className={styles.column}>
					<Editor
						value={codeText}
					/>
				</div>
			</div>
		</>
	);
}
