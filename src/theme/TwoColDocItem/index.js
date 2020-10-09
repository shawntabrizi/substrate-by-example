// Two column layout for a document.

import React from 'react';
import OriginalDocItem from "@theme-original/DocItem";
import styles from "./style.module.css"

export default function TwoColDocItem(props) {
	// Hide the table of contents in the two col layout.
	props.content.frontMatter.hide_table_of_contents = true;

	return (
		<>
			<div className={styles.row}>
				<div className={styles.column}>
					<OriginalDocItem {...props} />
				</div>
				<div className={styles.column}>
					<div>Second Col</div>
				</div>
			</div>
		</>
	);
}
